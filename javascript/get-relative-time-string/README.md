# Get relative time string

Относительное время:  
Вызывая конструктор `new Intl.RelativeTimeFormat(locale, options)`, 
мы получаем объект, который имеет ф-ии форматирования для получения результата.  

В объекте есть три ф-ии:  
resolvedOptions, formatToParts, format  

```js
const rtf = new Intl.RelativeTimeFormat('en', {
  numeric: 'auto',
  style: 'long',
  localeMatcher: 'best fit',
})

rtf.resolvedOptions()
// console: 
{ locale: 'en',
  style: 'long',
  numeric: 'auto',
}

rtf.formatToParts(1, 'day')
// console: 
[ { type: 'literal', value: 'tomorrow' } ]

rtf.format(1, 'day')
// console: 
'tomorrow'
```

Возможно изменить local на другой язык
```js
const rtf = new Intl.RelativeTimeFormat('ru', {...

rtf.format(1, 'day')
// console: 
'завтра'
```

`format(value, unit)`  

unit:  
day,  
days,  
hour,  
hours,  
minute,  
minutes,  
month,  
months,  
quarter,  
quarters,  
second,  
seconds,  
week,  
weeks,  
year,  
years

----

## getRelativeTimeString

args:  
