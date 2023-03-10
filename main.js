<script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js/model.json"></script>
const URL = "./my_model/";


let model, webcam, labelContainer, maxPredictions;
    async function init() {
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        const flip = true; 
        webcam = new tmImage.Webcam(200, 200, flip); 
        await webcam.setup();
        await webcam.play();
        window.requestAnimationFrame(loop);
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) { 
        labelContainer.appendChild(document.createElement("div"));
        }
    }
    async function loop() {
        webcam.update(); 
        await predict();
        window.requestAnimationFrame(loop);
    }
    async function predict() {
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
            const classPrediction =
                prediction[i].className + ": " + prediction[i].probability.toFixed(2);
            labelContainer.childNodes[i].innerHTML = classPrediction;
        }
    }
   function modelLoaded() {
    console.modelLoaded
   }
   
    function check() {
        var classify() ml5.js
    }
    function gotResult() {
        if () {
            innerHTML
            else
            var results
            
        }
    }
</script>