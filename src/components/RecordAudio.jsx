import { useEffect, useState } from "react"

export default function RecordAudio() {

    const [audioURL, setAudioURL] = useState("")
  

    function micro(){
        // Request access to the user's microphone
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
        // Create a MediaRecorder instance
        const mediaRecorder = new MediaRecorder(stream);
        const chunks = [];

        // Event handler when data is available
        mediaRecorder.ondataavailable = function (e) {
            if (e.data.size > 0) {
            chunks.push(e.data);
            }
        };

        // Event handler when recording stops
        mediaRecorder.onstop = function () {
            // Combine recorded chunks into a Blob
            const blob = new Blob(chunks, { type: 'audio/wav' });

            // Do something with the recorded audio blob
            // For example, send it to a server or play it back
            // You can create an audio element and set its source to the blob
            setAudioURL(URL.createObjectURL(blob))
            const audioElement = new Audio(URL.createObjectURL(blob));

            audioElement.play();
        };

        // Start recording
        mediaRecorder.start();

        // Stop recording after 5 seconds (adjust as needed)
        setTimeout(function () {
            mediaRecorder.stop();
        }, 5000);
        })
        .catch(function (err) {
        console.error('Error accessing microphone:', err);
        });
    }
  return (
    <div>
        {audioURL}
        <audio src={audioURL} controls></audio>
        <button onClick={micro}>Record</button>
    </div>
  )
}
