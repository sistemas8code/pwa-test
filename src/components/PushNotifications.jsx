import { useEffect, useState } from "react"

export default function PushNotifications() {
    useEffect(() => {
        Notification.requestPermission(status => {
            console.log("Notification pesmision status:", status)
        })  
    }, [])
    function displayNotification(){
        const options = {
          body: 'here is a notification body!',
          icon: "src/assets/icons/icon-192-192.png",
          vibrate: [100, 50, 100]
        }
        if(Notification.permission === "granted"){
            navigator.serviceWorker.getRegistration()
                .then(reg => {
                    reg.showNotification("hello world", options)
                })
        }
    }
  return (
    <div>
      <button onClick={displayNotification}>notification</button>
    </div>
  )
}
