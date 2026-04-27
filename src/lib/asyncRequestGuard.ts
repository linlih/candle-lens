export interface LatestRequestRunnerHandlers<T> {
  onSuccess: (value: T) => void
  onError: (error: unknown) => void
}

export function createLatestRequestRunner<T>() {
  let currentRequestId = 0

  return {
    run(task: () => Promise<T>, handlers: LatestRequestRunnerHandlers<T>) {
      const requestId = ++currentRequestId

      void task().then(
        (value) => {
          if (requestId === currentRequestId) {
            handlers.onSuccess(value)
          }
        },
        (error) => {
          if (requestId === currentRequestId) {
            handlers.onError(error)
          }
        },
      )

      return () => {
        if (requestId === currentRequestId) {
          currentRequestId += 1
        }
      }
    },
  }
}
