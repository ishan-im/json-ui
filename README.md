# React Dynamic Form Renderer from JSON 🚀


A React application that dynamically renders forms based on a provided UI schema. Built with React, TypeScript, and Tailwind CSS.

## Table of Contents

- [Tech Stack](#tech-stack)
- [File and Folder Structure](#file-and-folder-structure)
- [Screenshots](#screenshots)

# [Tech Stack](#tech-stack)

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static typing to the language.
- **Tailwind CSS**: A utility-first CSS framework for building modern designs.

## [File and Folder Structure](#file-and-folder-structure)

```plaintext
.
├── public
├── src
│   ├── components
│   │   ├── elements
│   │   │   ├── Input.tsx
│   │   │   ├── Radio.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Switch.tsx
│   │   │   └── Toggle.tsx
│   │   ├── ElementRenderer.tsx
│   │   ├── ToolTip.tsx
│   │   └── UiComponents.tsx
│   ├── context
│   │   └── Provider.tsx  
│   ├── types
│   │   ├── component.ts
│   │   └── form.ts
│   ├── utils
│   │   └── parse-label.ts
│   ├── App.css
│   ├── App.tsx
│   └── index.tsx 
│  
│   
├── .gitignore
├── tailwind.config.js
├── package.json
└── README.md 
```



# Deployed Link 🌐

[Link to Project ⛓️](https://json-to-ui.vercel.app/)

# [Screenshots 📷 & How to Use 🛠️](#screenshots)

**Provide JSON Schema:**

+ Upon accessing the application, you'll see a screen with a text bar on the left side.
+ In the text bar, paste or provide your JSON schema for the form.

[JSON Link](https://gist.github.com/ishan-im/314116a3ea1e08baca1cc4b416909f70)

<img width="556" alt="Screenshot 2023-12-26 110101" src="https://github.com/ishan-im/json-ui/assets/76674591/2c3ffe24-6cb4-4ea5-b793-bd9d82207346">

**Generate Form:**

+ After providing the JSON schema, press the "Generate Form" button.
+ On the right side, a form will be dynamically rendered based on the provided schema.

<img width="557" alt="Screenshot 2023-12-26 110149" src="https://github.com/ishan-im/json-ui/assets/76674591/d52709f0-00e4-4b30-9fc1-74e6929f0876">

**Complete the Form:**

+ The rendered form will contain fields based on the JSON schema.
+ Fill in the required details using your preferences, for example, choose between Naples Style Pizza and New York Style Pizza.

<img width="560" alt="Screenshot 2023-12-26 110259" src="https://github.com/ishan-im/json-ui/assets/76674591/055a7f85-13e4-408f-be02-749dab084b22">



**Submit the Form:**

+ Once you have provided the necessary details, click the "Submit" button.
+ After submission, a modal will appear displaying the JSON details of your order.
  
<img width="546" alt="Screenshot 2023-12-26 110327" src="https://github.com/ishan-im/json-ui/assets/76674591/5728ea79-a8c1-43db-9346-9f95d7be23c5">

**For Pasta Form Choose the JSON**

[Pasta JSON](https://gist.github.com/ishan-im/b7c205d0aaa251f53bd704789d34e76e)

<img width="559" alt="Screenshot 2023-12-26 110419" src="https://github.com/ishan-im/json-ui/assets/76674591/f8e46862-8fec-49c0-a00f-010e2dc1c347">
<img width="555" alt="Screenshot 2023-12-26 110441" src="https://github.com/ishan-im/json-ui/assets/76674591/a607cc9e-7914-4592-8e30-4e5f5c58799c">

