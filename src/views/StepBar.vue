<template>
  <div>
      <h1>Step Progress Bar</h1>
  </div>

  <div class="container">
      <div class="progress-container">
          <div class="progress" id="progress"></div>
              <div class="circle active"><p class="how">How</p></div>
              <div class="circle"><p class="where">Where</p></div>
              <div class="circle"><p class="details">Details</p></div>
              <div class="circle"><p class="confirm">Confirm</p></div>
      </div>

        <div class="howContainer" v-show="currentActive === 1">
            <h1>How Container</h1>
        </div>

        <div class="whereContainer" v-show="currentActive === 2">
            <h1>Where Container</h1>
        </div>

        <div class="detailsContainer" v-show="currentActive === 3">
            <h1>Details Container</h1>
        </div>

        <div class="confirmContainer" v-show="currentActive === 4">
            <h1>Confirm Container</h1>
        </div>

      <button class="btn" id="prev" disabled @click="stepPrev()">Prev</button>
      <button class="btn" id="next" @click="stepNext()">Next</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentActive: 1,
            circles: [],
            progress: [],
        }
    },
    methods:{
        stepPrev(){
            this.currentActive--;
            
            if(this.currentActive < 1){
                this.currentActive = 1;
            }
            this.stepUpdate();
            console.log(this.currentActive)
        },
        stepUpdate(){
            const prev = document.getElementById("prev")
            const next = document.getElementById("next")
            const progress = document.getElementById("progress")
            this.circles.forEach((circle, index)=>{
                if(index < this.currentActive){
                    circle.classList.add("active");
                }
                else{
                    circle.classList.remove("active");
                }
            });
            const actives = document.querySelectorAll(".active");
            progress.style.width = ((actives.length - 1) / (this.circles.length - 1)) * 100 + "%";
            console.log((actives.length / this.circles.length))

            if(this.currentActive === 1){
                prev.disabled = true;
            }
            else if(this.currentActive === this.circles.length){
                next.disabled = true;
            }else{
                next.disabled = false;
                prev.disabled = false;
            }
        },
        stepNext(){
            this.currentActive++;
            
            if(this.currentActive > this.circles.length){
                this.currentActive = this.circles.length;
            }
            console.log(this.currentActive)
            this.stepUpdate();
        },
    },
    mounted(){
        this.circles = document.querySelectorAll(".circle")
        // const prev = document.getElementById("prev")
        // const next = document.getElementById("next")
    }
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
    }

    
    .how{
        font-size: 1.1rem;
    }

    .where{
        font-size: 1.1rem;
    }

    .details{
        font-size: 1.1rem;
    }

    .confirm{
        font-size: 1.1rem;
    }

    .container{
        text-align: center;
        width: 60%;
        display: block;
        margin: auto;
    }

    .progress-container{
        display: flex;
        justify-content: space-between;
        position: relative;
        width: 100%;
    }

    .progress-container::before{
        content: "";
        background-color: #bdbdbd;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 6px;
        width: 100%;
        z-index: -1;
        transition: .9s ease;
    }

    .progress{
        background-color: #33f1a8;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 6px;
        width: 0%;
        z-index: -1;
        transition: .9s ease;
    }

    .circle{
        background-color: #fff;
        color: #999;
        border-radius: 50%;
        height: 70px;
        width: 70px;
        border: 4px solid #b2bec3;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .9s ease;
        
    }

    .circle.active{
        border-color: #33f1a8;
        background-color: #33f1a8;
        transition-delay: .3s;
    }

    .btn{
        background-color: #33f1a8;
        color: #fff;
        border-radius: 6px;
        border: 0;
        cursor: pointer;
        padding: 8px 30px;
        margin: 15px;
    }

    .btn:active{
        transform: scale(.97);
    }

    .btn:disabled{
        background-color: #bdbdbd;
        cursor: not-allowed;
    }

</style>