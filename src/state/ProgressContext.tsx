import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { ProgressState, QuizRecord } from '../types'

const STORAGE_KEY = 'geosphere-progress-v1'

const initialState: ProgressState = {
  version: 1,
  completed: {},
  lastTopic: null,
  quiz: {},
  cards: {},
  startedAt: Date.now(),
}

type ProgressApi = {
  state: ProgressState
  topicKey: (chapterId: string, topicId: string) => string
  isComplete: (chapterId: string, topicId: string) => boolean
  setComplete: (chapterId: string, topicId: string, complete: boolean) => void
  markVisited: (chapterId: string, topicId: string) => void
  recordQuiz: (id: string, record: QuizRecord) => void
  rateCard: (cardKey: string, rating: 'known' | 'review') => void
  reset: () => void
}

const ProgressContext = createContext<ProgressApi | null>(null)

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return initialState
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    if (!parsed || typeof parsed !== 'object') return initialState
    return {
      version: 1,
      completed: parsed.completed ?? {},
      lastTopic: parsed.lastTopic ?? null,
      quiz: parsed.quiz ?? {},
      cards: parsed.cards ?? {},
      startedAt: parsed.startedAt ?? Date.now(),
    }
  } catch {
    return initialState
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(load)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // Storage can be unavailable (private mode); the session still works.
    }
  }, [state])

  const topicKey = useCallback((chapterId: string, topicId: string) => `${chapterId}/${topicId}`, [])

  const isComplete = useCallback(
    (chapterId: string, topicId: string) => Boolean(state.completed[`${chapterId}/${topicId}`]),
    [state.completed],
  )

  const setComplete = useCallback(
    (chapterId: string, topicId: string, complete: boolean) => {
      const key = `${chapterId}/${topicId}`
      setState((prev) => {
        const completed = { ...prev.completed }
        if (complete) completed[key] = Date.now()
        else delete completed[key]
        return { ...prev, completed }
      })
    },
    [],
  )

  const markVisited = useCallback((chapterId: string, topicId: string) => {
    setState((prev) => {
      if (prev.lastTopic?.chapterId === chapterId && prev.lastTopic.topicId === topicId) return prev
      return { ...prev, lastTopic: { chapterId, topicId } }
    })
  }, [])

  const recordQuiz = useCallback((id: string, record: QuizRecord) => {
    setState((prev) => {
      const previous = prev.quiz[id]
      // Keep the learner's best score so the progress page reflects mastery.
      if (previous && previous.score > record.score) return prev
      return { ...prev, quiz: { ...prev.quiz, [id]: record } }
    })
  }, [])

  const rateCard = useCallback((cardKey: string, rating: 'known' | 'review') => {
    setState((prev) => ({ ...prev, cards: { ...prev.cards, [cardKey]: rating } }))
  }, [])

  const reset = useCallback(() => {
    setState({ ...initialState, startedAt: Date.now() })
  }, [])

  const value = useMemo<ProgressApi>(
    () => ({ state, topicKey, isComplete, setComplete, markVisited, recordQuiz, rateCard, reset }),
    [state, topicKey, isComplete, setComplete, markVisited, recordQuiz, rateCard, reset],
  )

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export function useProgress(): ProgressApi {
  const context = useContext(ProgressContext)
  if (!context) throw new Error('useProgress must be used inside ProgressProvider')
  return context
}
