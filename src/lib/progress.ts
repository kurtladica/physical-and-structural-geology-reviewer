import { chapters } from '../content'
import type { ProgressState } from '../types'

export function overallProgress(state: ProgressState) {
  const total = chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0)
  const done = Object.keys(state.completed).length
  return { done: Math.min(done, total), total, percent: total ? Math.round((done / total) * 100) : 0 }
}

export function chapterProgress(chapterId: string, state: ProgressState) {
  const chapter = chapters.find((item) => item.id === chapterId)
  if (!chapter) return { done: 0, total: 0, percent: 0 }
  const done = chapter.topics.filter((topic) => state.completed[`${chapterId}/${topic.id}`]).length
  return { done, total: chapter.topics.length, percent: Math.round((done / chapter.topics.length) * 100) }
}

export function reviewTopicKeys(state: ProgressState): string[] {
  const keys = new Set<string>()
  for (const [cardKey, rating] of Object.entries(state.cards)) {
    if (rating === 'review') {
      const [chapterId, topicId] = cardKey.split('/')
      keys.add(`${chapterId}/${topicId}`)
    }
  }
  for (const record of Object.values(state.quiz)) {
    for (const wrongKey of record.wrong) {
      const [chapterId, topicId] = wrongKey.split('/')
      if (chapterId && topicId) keys.add(`${chapterId}/${topicId}`)
    }
  }
  return [...keys]
}

export function quizHistory(state: ProgressState) {
  return Object.entries(state.quiz)
    .map(([id, record]) => ({ id, ...record }))
    .sort((a, b) => b.at - a.at)
}

export function quizLabel(id: string) {
  if (id === 'final') return 'Whole-course quiz'
  if (id.startsWith('chapter:')) {
    const chapter = chapters.find((item) => item.id === id.replace('chapter:', ''))
    return chapter ? `Chapter ${chapter.number} quiz · ${chapter.title}` : 'Chapter quiz'
  }
  const [chapterId, topicId] = id.split('/')
  const chapter = chapters.find((item) => item.id === chapterId)
  const topic = chapter?.topics.find((item) => item.id === topicId)
  return topic ? `Topic quiz · ${topic.title}` : 'Topic quiz'
}

export function topicFromKey(key: string) {
  const [chapterId, topicId] = key.split('/')
  const chapter = chapters.find((item) => item.id === chapterId)
  const topic = chapter?.topics.find((item) => item.id === topicId)
  return chapter && topic ? { chapter, topic } : undefined
}

export function formatDate(timestamp: number) {
  return new Date(timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })
}
