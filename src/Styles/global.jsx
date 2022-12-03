import { createGlobalStyle } from "styled-components";
export const GlobalStyles=createGlobalStyle`


*,*::after,*::before{
    box-sizing:border-box;
}
    body{
        background:${({theme})=>theme.background};
        color:${({theme})=> theme.title};
        padding:0;
        margin:0;
        transition:all 0.25s linear;
        
    }
    .canvas{
        display:grid;
        grid-auto-flow:row;
        grid-template-row:auto 1fr auto;
        min-height:100vh;
        gap:0.5rem;
        padding:1rem;
        width:100vw;
        align-items:center;
    }
    .type-box{
        background-color:black;
        display:block;
        max-width:1000px;
        height:150px;
        position:relaive;
        margin-left:auto;
        margin-right:auto;
        overflow:hidden;
    }
    .words{
        font-size:30px;
        display:flex;
        flex-wrap:wrap;
        align-content:center;
        width:100%;
        color:${({theme})=> theme.typeBoxText};
    }
    .word{
        margin:5px;
        padding-right:2px;
    }
    .hidden-input{
        opacity:0;
    }
    .not_correct{
        color:red;
    }
    .correct{
        color:${({theme})=> theme.title};
    }
    .current{
        border-left:1px solid;
        animation:blinking 2s infinite;
        animation-timing-function:ease;
        @keyframes blinking{
            0% {border-left-color:${({theme})=> theme.title};}
            25% {border-left-color:${({theme})=> theme.background};}
            50% {border-left-color:${({theme})=> theme.title};}
            75% {border-left-color:${({theme})=> theme.background};}
            100% {border-left-color:${({theme})=> theme.title};}
        }
        


    }

  .right{
        border-right:1px solid;
        animation:blinkingRight 2s infinite;
        animation-timing-function:ease;
        @keyframes blinkingRight{
            0% {border-right-color:${({theme})=> theme.title};}
            25% {border-right-color:${({theme})=> theme.background};}
            50% {border-right-color:${({theme})=> theme.title};}
            75% {border-right-color:${({theme})=> theme.background};}
            100% {border-right-color:${({theme})=> theme.title};}
        }
    }

    .upper-menu{
        display:flex;
        max-width:1000px;
        margin-left:auto;
        margin-right:auto;
        justify-content: space-between;
        font-size: 20px;
        padding:1rem;
        color: ${({theme})=> theme.typeBoxText}

    }
    .time-modes{
        display:flex;

    }
    .counter{
        cursor:none;
    }
    .time{
        margin-right:15px;
    }

    .time:hover{
        color: ${({theme})=> theme.title};
        cursor:pointer;
    }
    
    .stat-box{
        display:flex;
        max-width:1000px;
        height:auto;
        margin-left:auto;
        margin-right:auto;
        gap:2rem;
        
    }
    .title{
        font-size:20x;
        color:${({theme})=> theme.typeBoxText};
    }
    .subtitle{
        font-size:30px;
        color:${({theme})=> theme.title};
    }
    .left-stats{
        width:30%;
        padding:30px;
    }
    .right-stats{
        width:70%;  
    }
    .footer{
        display:flex;
        width:1000px;
        margin-right:auto;
        margin-left:auto;
        justify-content:space-between;
        height:60px;
    }
    .header{
        display:flex;
        justify-content:space-around;
    }
    .result-graph .table{
        width:1000px;
        margin:auto;
    }
    .user-profile{
        width:1000px;
        margin:auto;
        display:flex;
        main-height:15rem;
        background:${({theme})=>theme.typeBoxText};
        border-radius:20px;
    }
`