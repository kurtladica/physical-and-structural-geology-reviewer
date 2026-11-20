export type Block =
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { t: 'formula'; tex: string; note?: string }
  | { t: 'callout'; kind: 'note' | 'warn' | 'tip'; title?: string; text: string }
  | { t: 'deflist'; items: { term: string; def: string }[] }
  | { t: 'steps'; items: { label: string; text: string }[] }

export type RawQuestion =
  | { type: 'mcq'; prompt: string; options: string[]; answer: number; explain: string }
  | { type: 'tf'; prompt: string; answer: boolean; explain: string }
  | { type: 'short'; prompt: string; accept: string[]; explain: string }

export type ExampleStep = { label: string; text: string; tex?: string }

export type WorkedExample = {
  problem: string
  given: string[]
  required: string
  steps: ExampleStep[]
  answer: string
  check?: string
}

export type Topic = {
  id: string
  title: string
  tagline: string
  source: { file: string; pages: string }
  objectives: string[]
  intro: { what: string; why: string; before: string[] }
  simple: Block[]
  full: Block[]
  diagram?: { key: string; title: string; caption: string }
  example?: WorkedExample
  selfCheck: { q: string; a: string }[]
  quiz: RawQuestion[]
  cards: { front: string; back: string }[]
}

export type PracticeProblem = {
  id: string
  level: 'easy' | 'medium' | 'hard'
  question: string
  hint: string
  steps: string[]
  answer: string
}

export type Chapter = {
  id: string
  number: number
  title: string
  subtitle: string
  pdf: string
  pages: string
  accent: string
  topics: Topic[]
  practice: PracticeProblem[]
}

export type BankQuestion = RawQuestion & { topicId: string }

export type MaterializedQuestion = RawQuestion & { key: string; topicId: string; topicTitle: string }

export type ChapterRef = Chapter

export type Level = 'easy' | 'medium' | 'hard'

export type Formula = {
  id: string
  name: string
  tex: string
  variables: { symbol: string; meaning: string; unit: string }[]
  when: string
  example: { problem: string; steps: string[]; answer: string }
  topicId: string
}

export type QuizRecord = { score: number; total: number; at: number; wrong: string[] }

export type ProgressState = {
  version: 1
  completed: Record<string, number>
  lastTopic: { chapterId: string; topicId: string } | null
  quiz: Record<string, QuizRecord>
  cards: Record<string, 'known' | 'review'>
  startedAt: number
}
