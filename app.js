/*
let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

ctx.strokeStyle = '#4444CC'; //Nuance de bleu
ctx.strokeRect(50, 25, 200, 100);
*/

const app = Vue.createApp({
    data() {
        return {
            lifePlayer : '100',
            lifeEnnemy: '100',
            roundNumber: 0,
            winner: '',
        }
        
    },
    
    methods: {
        attackAdvers() {
            this.lifeEnnemy = this.lifeEnnemy - 12 ;
            this.attackPlayer();
            this.roundNumber = this.roundNumber + 1 ;
        },
        attackSpec() {
            this.lifeEnnemy = this.lifeEnnemy - 20 ;
            this.attackPlayer();
            this.roundNumber = this.roundNumber + 1 ;
        },
        attackPlayer() {
            this.lifePlayer = this.lifePlayer - 15 ;
            this.roundNumber = this.roundNumber + 1 ;
        },
        cure() {
            if(this.lifePlayer <= 100) {
                console.log("Feliz Navidad");
                this.lifePlayer = this.lifePlayer + 17;
                this.attackPlayer();
                this.roundNumber = this.roundNumber + 1 ;
            } 
        },
        gameOver() {
            
        }      
    }
});
app.mount('#monApp');