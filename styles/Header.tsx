
import styled from "styled-components"
import { flexBetween } from "./Mixins"

export const HeaderContainer = styled.header`
    ${flexBetween}
    position: fixed;
    top: 0;
    padding: 0px 50px;
    width: 100%;
    height: $nav-height;
    box-shadow: 0px 10px 15px  var(--color-main-shadow);
    transition: $transition;
    font-family: $font-mono;
    color: var(--color-letter-lightest);
    z-index: 11;
    backdrop-filter: blur(10px);
    
    @media (max-width: 1080px) {
      padding: 0 40px;
    }
    @media (max-width: 768px) {
      padding: 0 25px;
    }
  
    .styledLinks {
      display: flex;
      align-items: center;
    
      @media (max-width: 768px) {
        display: none;
      }
    
      ol {
        @include flexBetween;
        padding: 0;
        list-style: none;
        
        li {
          margin: 0 5px;
          position: relative;
          counter-increment: item 1;
          font-size: $fz-xs;
        
          a {
            padding: 10px;
            
            &:before {
              content: "0" counter(item) ".";
              margin-right: 5px;
              color: var(--color-second);
              font-size: $fz-xxs;
              text-align: right;
            }
          }
        }
      }
    
      .button {
        margin-left: 15px;
      }
    }
`

// @import "../vars.scss";
// @import "../mixins.scss";

// .header {

// }
