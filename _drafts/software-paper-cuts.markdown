---
title: Software Paper Cuts
date: 2022-01-17 17:54:00 -05:00
---

I’ve been using software every day for almost 20 years. I use it to do my work, create things in my spare time, socialize, relax, and so much more. And if you’ve met me or been reading this site for a while, you know I have very strong opinions about how it should be designed and crafted. But by far my strongest opinion is that almost no one pays enough attention to the paper cuts. In the field of interaction design, a [paper cut bug](https://en.wikipedia.org/wiki/Paper_cut_bug) is “a trivially fixable usability bug”. The term comes from the Ubuntu team, which decided in 2009 to prioritize fixing lots of these little niggling issues. 

Running up against a paper cut bug feels a little bit like getting a physical one: not the end of the world, but certainly unpleasant. These types of tiny annoyances accrete over time, especially when no one is paying attention to them. In a single day of using my phone, I encounter dozens of these little bugs that each annoy me just a little bit, making the task I’m trying to accomplish just a little bit more difficult.  For example, I might notice a button that’s enabled even though it can’t do anything or a form field that has a scroll bar even though there’s no scrolling content. The result is that I trust the software I use less. When software isn’t polished, when it’s full of things that feel like paper cuts, it becomes less joyful and more frustrating. It sucks all the opportunity for delight out of the room.

The more insidious thing about these bugs is that they’re almost never reported by users or caught by automated testing tools because they’re too small to complain about and often too obscure to be tested by engineers. Great QA testers can find and file these types of bugs, but they usually flounder at the end of a long backlog of new features. Which means that if you’re an engineer on a piece of software, **you’re the person who’s best able to notice and fix these bugs**. Yes, you might have to convince your boss or your product manager to set aside some time every so often to do so, but I promise your users will be grateful and your product will improve in meaningful ways if you do.

What kinds of things should you be looking for? How can we notice paper cuts when they’re such a part of our daily reality in every app we use? Here’s a list to get you started of some of the most frequent paper cuts I see. I hope it helps in your quest to smooth out the edges of your software—to [paint the back of the fence.](https://www.linkedin.com/pulse/paint-back-fence-chris-clark/)

## Common Paper Cuts

* **Lougouts**. When I open the app, sometimes I’m randomly logged out for no good reason.
* **Inconsistent Copy**. The text switches randomly between straight quotes and smart quotes or title case and sentence cases.
* **No Undo**. When I change something the UI updates instantly but there’s no way to undo the change, so now I’m out of luck if I don’t remember what I did.
* **Scroll Hitches**. Scrolling lists cause the app to freeze up or drop frames.
* **Missing Options**. The app is missing an option for my gender/pronouns or forcing me to fill out a required field that doesn’t apply to me?
* **Lacking Accessibility**. Some elements are missing labels for screen readers, the visuals have poor contrast, etc. I wrote an entire talk about this.
* **Unlocalized**. The copy and date/time formatting doesn’t match my language or region settings.
* **Typography.** An element is improperly typeset leading to inconsistent margins, cut-off descenders, or illegibility.
* **Strict Validation. **Overly strict form validation is preventing me from using the name I want to or including an emoji.
* **Flashes & Blinks**. When things load from the network or disk they flash or blink into place or the content of the screen jumps around to accommodate them.
* **No Loading State**.  Something is taking a while but there’s no spinner progress bar to keep me informed.
* **No Empty View.** A list becomes empty and I’m staring into the void rather than at a nicely designed empty view so I know what I can fill it with.
* **Wayfinding**. I can’t easily find Settings, Terms of Service, Privacy Policy, third-party code licenses, etc.
* **No Primary Action**. The primary action on each screen isn’t differentiated or highlighted so it’s hard to know what I’m supposed to do.
* **Dead Ends. **There’s no way out of a screen or flow. Or there’s no way to cancel or delete my account.
* **Missing States**. Buttons and list items don’t look any different when they’re touched, hovered, or disabled so it’s hard to know what state they’re in.
* **Where Was I?** The app forgets where I was when I reopen it or clears my selection when I go to the background.
* **Missing Animation**. Rather than smoothly animating to a new state, the UI just blinks and updates, like an unfortunate smash cut.
* **No Errors or Retry. When I try to do something, the operation fails without any error message or way to retry.

I challenge you to use your own app with fresh eyes on Monday morning. After an hour, is your hand covered with paper cuts? What are the bugs you’ve hit so many times in the software that you forgot they were bugs? You know you can fix those, right? Well, get to it.