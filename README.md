# Invoice App Frontend

This is the frontend for the invoice app.

## Issues

- I had difficulty testing "next-themes". This uses localStorage and in my e2e tests I struggled to understand why the theme was not consistent without any button being clicked. To resolve this, I am setting the local storage in my tests to ensure this consistency. I also had difficulty component testing the functionality of the button, as again I had trouble programatically setting the theme to be able to test the button was displaying as it should. I settled on creating a wrapper class, so I can maintain the SSR benefits on the rest of the header and still pass the theme as a dependency to be able to test the component.
- As per the design file there is shortened text content at smaller screen sizes. To do this I am using css and Tailwind's sr-only class - this means a screen reader will still read the full text, but only the shortened version is visible for styling. Also I don't need a Hook to get the window size in the JavaScript. However, Cypress considers this sr-only text as visible. Therefore it's been difficult to test the text content at mobile sizes. I have only been able to test the sr-only class exists.

Test
