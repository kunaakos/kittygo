## KittyGo

Off, it's been a while, but I'm updating this with a readme. This POC was written at a time when I was still working at a company where we had an incredibly complicated client-side filtering system for a metasearch engine (the name of the company rhimes with KittyGo).

It was written (mostly) in TS and using AngularJS, and was quite a mess, and not too performant either. There was a lot of OOP, side effects, MUTATIONS EVERYWHERE, and of course: bugs. It was difficult to keep it going - but the leads insisted there was no other way, results had to be sorted and filtered in place by a DAG of class instances yanking each others methods back and forth, because of performance. We never benchmarked that assumption of course (I did, hence this project).

In short, this POC sorts through thousands if items (cats), by generating a series of predicate functions from filter settings, and basically doing `allItems.filter(allPass(predicates))` and letting react handle the rest. It was tested with up to 10k items, which is about 10 times as much as it would've seen on average, and it pulled off filtering of 1000 items between frames (which was my goal) without any sort of optimization. I also tried flow, which I still have mixed feelings about, and I remember that there was some issue related to polymorphism and exact types that I struggled with in this project and later on in a prod codebase using flow, but have figured out since how to deal with that scenario (in TS).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). See [the guide for v1.0.176](https://github.com/facebookincubator/create-react-app/blob/v1.0.17/packages/react-scripts/template/README.md).

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
