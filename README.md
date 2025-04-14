# Lovable Vaadin Starter README

## Create a lovable application

Start off by prompting lovable.dev, then click on the + button, click knowledge
Paste in the [knowledge](knowledge.md)

Then tell it to:

``` Update this project according to the knowledge```

If you are lucky, it will do it correctly.

## Convert lovable to vaadin

Find your primary page. I.e. there should only be 1 element in your index.tsx render section in lovable. If you created an app for notes, it should have a single tag in the render section called <NotesApp/> - Go to the notesapp.tsx and use that content

Go to [this GPT](https://chatgpt.com/g/g-67f838fcebf88191aaa54fa7612a7fef-lovable-to-vaadin-converter) and tell it to:

```
convert this:

<<Paste in your lovable code here>>
```

It should convert it to vaadin code.

Now download the code from lovable, and put everything in the frontend folder.

## The rest:

- [ ] Copy the css into your styles.css
- [ ] Make sure that all dependencies are present in the package.json and ```npm i``` has been run