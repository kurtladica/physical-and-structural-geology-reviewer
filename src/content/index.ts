import type { BankQuestion, Chapter, MaterializedQuestion, PracticeProblem, Topic } from '../types'
import { ch1 } from './ch1'
import { ch2 } from './ch2'
import { ch3 } from './ch3'
import { ch4 } from './ch4'
import { ch5 } from './ch5'
import { ch6 } from './ch6'
import { ch7 } from './ch7'
import { ch8 } from './ch8'
import { ch9 } from './ch9'
import { ch10 } from './ch10'
import { ch11 } from './ch11'
import { ch12 } from './ch12'
import { ch13 } from './ch13'
import { ch14 } from './ch14'
import { ch15 } from './ch15'
import { ch16 } from './ch16'
import { bank1 } from './banks/bank1'
import { bank2 } from './banks/bank2'
import { bank3 } from './banks/bank3'
import { bank4 } from './banks/bank4'
import { bank5 } from './banks/bank5'
import { bank6 } from './banks/bank6'
import { bank7 } from './banks/bank7'
import { bank8 } from './banks/bank8'
import { bank9 } from './banks/bank9'
import { bank10 } from './banks/bank10'
import { bank11 } from './banks/bank11'
import { bank12 } from './banks/bank12'
import { bank13 } from './banks/bank13'
import { bank14 } from './banks/bank14'
import { bank15 } from './banks/bank15'
import { bank16 } from './banks/bank16'

const banks: Record<string, BankQuestion[]> = {
  ch1: bank1,
  ch2: bank2,
  ch3: bank3,
  ch4: bank4,
  ch5: bank5,
  ch6: bank6,
  ch7: bank7,
  ch8: bank8,
  ch9: bank9,
  ch10: bank10,
  ch11: bank11,
  ch12: bank12,
  ch13: bank13,
  ch14: bank14,
  ch15: bank15,
  ch16: bank16,
}

export const chapters: Chapter[] = [
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  ch7,
  ch8,
  ch9,
  ch10,
  ch11,
  ch12,
  ch13,
  ch14,
  ch15,
  ch16,
]

export const course = {
  code: 'GS 21/L',
  title: 'Physical and Structural Geology',
  shortTitle: 'GeoStud 1.0',
  description:
    'An interactive study companion built from the sixteen GS 21/L lesson PDFs. Every lesson cites its source file and pages.',
  creator: {
    name: 'GeoStud 1.0',
    role: 'design, development and content adaptation',
  },
}

export function getChapter(chapterId: string | undefined): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === chapterId)
}

export function getTopic(chapterId: string | undefined, topicId: string | undefined) {
  const chapter = getChapter(chapterId)
  const topic = chapter?.topics.find((item) => item.id === topicId)
  if (!chapter || !topic) return undefined
  return { chapter, topic }
}

export function topicKey(chapterId: string, topicId: string) {
  return `${chapterId}/${topicId}`
}

export function materializeQuestions(chapter: Chapter, topic: Topic): MaterializedQuestion[] {
  const own = topic.quiz.map((question, index) => ({
    ...question,
    key: `${chapter.id}/${topic.id}/q${index + 1}`,
    topicId: topic.id,
    topicTitle: topic.title,
  }))
  const extra = (banks[chapter.id] ?? [])
    .filter((question) => question.topicId === topic.id)
    .map((question, index) => ({
      ...question,
      key: `${chapter.id}/${topic.id}/b${index + 1}`,
      topicTitle: topic.title,
    }))
  return [...own, ...extra]
}

export function chapterQuestions(chapter: Chapter): MaterializedQuestion[] {
  return chapter.topics.flatMap((topic) => materializeQuestions(chapter, topic))
}

export const allQuestions: MaterializedQuestion[] = chapters.flatMap(chapterQuestions)

export const allCards = chapters.flatMap((chapter) =>
  chapter.topics.flatMap((topic) =>
    topic.cards.map((card, index) => ({
      ...card,
      key: `${chapter.id}/${topic.id}/c${index + 1}`,
      chapterId: chapter.id,
      topicId: topic.id,
      chapterTitle: chapter.title,
      topicTitle: topic.title,
    })),
  ),
)

export const allPractice: (PracticeProblem & { chapterId: string; chapterTitle: string })[] = chapters.flatMap(
  (chapter) =>
    chapter.practice.map((problem) => ({
      ...problem,
      chapterId: chapter.id,
      chapterTitle: chapter.title,
    })),
)

export function neighbours(chapterId: string, topicId: string) {
  const index = chapters.findIndex((chapter) => chapter.id === chapterId)
  const chapter = chapters[index]
  if (!chapter) return { previous: undefined, next: undefined }
  const topicIndex = chapter.topics.findIndex((topic) => topic.id === topicId)
  const flat = chapters.flatMap((c) => c.topics.map((t) => ({ chapter: c, topic: t })))
  const position = flat.findIndex((entry) => entry.chapter.id === chapterId && entry.topic.id === topicId)
  const previousEntry = position > 0 ? flat[position - 1] : undefined
  const nextEntry = position >= 0 && position < flat.length - 1 ? flat[position + 1] : undefined
  const nextInChapter = chapter.topics[topicIndex + 1]
  return {
    previous: previousEntry,
    next: nextInChapter
      ? { chapter, topic: nextInChapter }
      : nextEntry
        ? { chapter: nextEntry.chapter, topic: nextEntry.topic }
        : undefined,
  }
}

export function chapterCardCount(chapter: Chapter) {
  return chapter.topics.reduce((sum, topic) => sum + topic.cards.length, 0)
}

export const stats = {
  chapters: chapters.length,
  topics: chapters.reduce((sum, chapter) => sum + chapter.topics.length, 0),
  questions: allQuestions.length,
  cards: allCards.length,
  practice: allPractice.length,
  diagrams: chapters.reduce((sum, chapter) => sum + chapter.topics.filter((topic) => topic.diagram).length, 0),
}
