#merge

[http://portfolio.zachsteiner.com/merge/](http://portfolio.zachsteiner.com/merge/)


This interface concept demonstrates a method for merging duplicate records when importing data from a file or another data system. In this example, a user imported an Excel file of employee information. There are multiple suspected duplicate employees. Duplicates without differences can be merged at the click of a button or en masse. Those with differences&mdash;maybe "Bob" versus "Robert" or a transposed number in a employee number&mdash;will require walking the user through the merge process, which will be discussed later. The result is a process that helps the user feel comfortable the resulting data is clean by providing feedback and transparency through the process. Despite being a manual process, the interface gives a clear path and empowers the user to quickly make informed decisions. Typical merge operations are destructive, but this method [SVG](through hypothetical database) a new version of the employee record linked to the previous two, so that merging/separating can be non-destructive. A user can abandon or undo work as needed through the workflow.

This is an interactive prototype to demonstrate interactions. This demo does not save information between pages, either client-side or in a database. It is purely to provide an overview of a interface solution to common data system workflow.

##Technical Info
This concept was built with HTML, Sass, jQuery, SVG, and JavaScript. Works in modern browsers that support (http://caniuse.com/#feat=svg) and [Flexbox](http://caniuse.com/#feat=flexbox). Browser support aided by [Autoprefixer](https://github.com/postcss/autoprefixer).
Typeface is [Work Sans](http://weiweihuanghuang.github.io/Work-Sans/). List filtering is provided by [List.js](http://www.listjs.com). Icons are from [Material Design Icon Set](https://github.com/google/material-design-icons).
Source Code is available on [Github](https://github.com/zsteiner/merge). 
