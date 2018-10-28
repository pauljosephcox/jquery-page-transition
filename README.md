# jQuery Page Transitions
Initalize the JS and then add css transitions to everythin!

### CSS
Write your css as normal. Then add an enter state and a leave state.
The following example fades the class `.content` in on page load and then fades it out before leaving.

```

.content {
    opacity: 1;
    transition: all 200ms;
}

.transition-enter .content {

    opacity: 0;

}

.transition-leave .content {

    opacity: 0;

}
```
