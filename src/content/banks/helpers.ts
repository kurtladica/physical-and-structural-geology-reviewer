import type { BankQuestion } from '../../types'

export const m = (
  topicId: string,
  prompt: string,
  options: string[],
  answer: number,
  explain: string,
): BankQuestion => ({ type: 'mcq', topicId, prompt, options, answer, explain })

export const t = (topicId: string, prompt: string, answer: boolean, explain: string): BankQuestion => ({
  type: 'tf',
  topicId,
  prompt,
  answer,
  explain,
})

export const s = (topicId: string, prompt: string, accept: string[], explain: string): BankQuestion => ({
  type: 'short',
  topicId,
  prompt,
  accept,
  explain,
})
