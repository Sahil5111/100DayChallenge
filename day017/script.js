const button = document.querySelector('button')

button.addEventListener("click", () => {
    Notification.requestPermission().then(
        p => {
            if (p === 'granted') {
                let text = new Notification('Example Notification', {
                    body: 'button was clicked',
                    tag: "this is tag"
                })

                console.log(text.body)
            }
        }
    )
})