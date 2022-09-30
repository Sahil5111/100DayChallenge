const button = document.querySelector('button')

button.addEventListener("click", () => {
    Notification.requestPermission().then(
        p => {
            if (p === 'granted') {
                let text = new Notification('Example Notification', {
                    body: 'this is more text',
                    tag: "this is tag"
                })

                console.log(text.body)
            }
        }
    )
})