# Invoice App Frontend

This is the frontend for the invoice app.

## CI/CD

I am trying to learn more about CI/CD. I have added a github action that runs my Cypress component tests on push to main.

I am using Vercel and by default pushing to main updates the production branch. You can create a Preview deployment by committing changes to another branch, without merging these changes to the production branch.

## Issues

- I had difficulty testing "next-themes". This uses the system theme or localStorage and in my e2e tests I have struggled to stub the system theme. It works to enforce dark mode, but not for light mode. Also when the page uses the system theme the toggle button does not load. Trying to wait for this also causes an error. I have settled on checking the actual system theme and testing for this, as well as enforcing dark mode. I am setting the localStorage theme to enable me to test the button as part of my e2e tests. I also had difficulty component testing the functionality of the button, as again I had trouble programatically setting the theme to be able to test the button was displaying as it should. I settled on creating a wrapper class, so I can maintain the SSR benefits on the rest of the header and still pass the theme as a dependency to be able to test the component.
- As per the design file there is shortened text content at smaller screen sizes. To do this I am using css and Tailwind's sr-only class - this means a screen reader will still read the full text, but only the shortened version is visible for styling. Also I don't need a Hook to get the window size in the JavaScript. However, Cypress considers this sr-only text as visible. Therefore it's been difficult to test the text content at mobile sizes. I have only been able to test the sr-only class exists.
