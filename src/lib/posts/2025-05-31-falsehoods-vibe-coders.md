---
title: 'Falsehoods Vibe Coders Believe About LLMs'
date: 2025-05-31
description: 'Not everyone can be a great coder, but a great coder can come from anywhere. After 13 years of software development, here are some of the dangerous assumptions I have seen newcomers make about coding with LLMs.'
published: true
---

Patrick McKenzie wrote a blog post 15 years ago called [Falsehoods Programmers Believe About Names](https://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/). It's approachable enough that even people with no coding experience will gain a new appreciation for the sheer variance of human names and the absurdity of software engineering.

In the last two years of vibe coding in various capacities, AI has expanded my knowledge of strategies and tactics for approaching new projects, but has also blindly led me down the completely wrong path for some problems. While I was in the rabbit hole of [clean code](https://books.google.com/books/about/Clean_Code.html?id=hjEFCAAAQBAJ&source=kp_book_description), [hexagonal architecture](<https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)>), and [event-driven](https://en.wikipedia.org/wiki/Event-driven_programming) [distributed systems](https://en.wikipedia.org/wiki/Distributed_computing), I was watching friends and family gain the capability to build their own apps, scripts, and tools using AI-powered coding products like [Cursor](https://www.cursor.com/?utm_source=wilsonhobbs.com), [Windsurf](https://www.windsurf.dev/?utm_source=wilsonhobbs.com), and [Github Copilot](https://github.com/features/copilot?utm_source=wilsonhobbs.com).

As a public service, here are some of the falsehoods I have seen newcomers believe about LLM-generated code, with some misconceptions about LLMs and software development at large for good measure. **All of these are wrong.** You likely don't believe all of them, but you may believe a few of them. But unlike Patrick McKenzie's never seeing a system handle names correctly, I _have_ seen people vibe code safely, and you can vibe code safely too.

1. LLMs sometimes write code that always works
2. LLMs always write code that sometimes works
3. LLMs can determine whether a piece of code works or not
4. LLMs can write a program to determine if a piece of code works or not
5. Code written by an LLM is correct if it does what you expect it to
6. Code written by an LLM will do what you expect it to do the way you expect it to be done
7. Code written by an LLM will do what you expect it to do
8. Code written by an LLM will do something useful
9. Code written by an LLM will do anything at all
10. If the code written by an LLM [compiles](https://medium.com/@tunacici7/what-is-a-compiler-really-b8e5a1fbbb35), it is correct
11. Code written by an LLM will compile
12. If the code written by an LLM runs, its correct
13. Code written by an LLM will run
14. Code written by an LLM will eventually stop running
15. An LLM can determine whether a piece of code will ever stop running or not
16. An LLM can [write a program to determine whether a piece of code will ever stop running or not](https://en.wikipedia.org/wiki/Halting_problem)
17. LLMs can determine the correctness of a piece of code by looking at it
18. LLMs can determine the purpose behind a piece of code by looking at it
19. LLMs can accurately describe the behavior of a piece of code by looking at it
20. LLMs will attempt to use the code you have already written
21. LLMs only use libraries and APIs that exist
22. LLMs can generate code for any package as long as the docs are good
23. When an LLM says “this is the standard way”, it is the standard way
24. Code written by LLMs is secure
25. Code written by LLMs is safe to deploy to production
26. Code written by LLMs is safe to run locally
27. LLMs can assess the security of a piece of code
28. LLMs know about the causes and mitigations of most security vulnerabilities
29. LLMs are alive
30. LLMs are thinking
31. LLMs are reasoning
32. LLMs remember what they told you 5 minutes ago
33. LLMs work towards your best interests
34. LLMs work towards their own best interests
35. Software bugs happen because the code is wrong, not because the human is wrong
36. LLMs warn you when you’re solving the wrong problem
37. LLMs can “fill in the blanks” when it's not sure
38. LLMs will speak up when the requirements are unclear
39. People are good at asking for what they want
40. You are good at asking for what you want

This list is by no means exhaustive. If you need examples of AI generated code that disproves any of the above misconceptions, I am happy to provide you with some. ~~Feel free to add other misconceptions in the comments~~ (how do I do a comments section on this thing now that Disqus is dead?), and refer people to this post the next time they suggest a genius idea like "I'll just fire all my engineers and use an LLM to build my app".
