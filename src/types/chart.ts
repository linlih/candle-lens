export interface ChartTheme {
  background: string
  gridColor: string
  textColor: string
  crosshairColor: string
  bullColor: string
  bearColor: string
  wickBullColor: string
  wickBearColor: string
}

export const darkTheme: ChartTheme = {
  background: '#131722',
  gridColor: '#2a2e39',
  textColor: '#d1d4dc',
  crosshairColor: '#787b86',
  bullColor: '#26a69a',
  bearColor: '#ef5350',
  wickBullColor: '#26a69a',
  wickBearColor: '#ef5350',
}

export const lightTheme: ChartTheme = {
  background: '#ffffff',
  gridColor: '#f0f3fa',
  textColor: '#131722',
  crosshairColor: '#9598a1',
  bullColor: '#26a69a',
  bearColor: '#ef5350',
  wickBullColor: '#26a69a',
  wickBearColor: '#ef5350',
}
