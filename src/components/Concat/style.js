import styled from "styled-components" ;

export const Drop = styled.div`
    padding: 50px 0;
    text-align: center
`

export const DropTitle = styled.h2`
    font-size: 60px;
    margin-bottom: 30px
`

export const Span = styled.span`
    font-weight: normal
`

export const Form = styled.form`
    width: 70%;
    margin: auto;
`

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
`

export const FormIn = styled.div`
    overflow: hidden
`

export const FormInput = styled(Input)`
    float : ${props => props.type === "text" ? "left" : props.type === "email" ? "right" : "" };
    width : ${props => props.sub ? "100%" : props.sup ? "49%" : "" }
`

export const TextArea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`

export const Submit = styled.input`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`


/*

.drop {
    padding: 50px 0;
    text-align: center
}

.drop .drop-title {
    font-size: 60px;
    margin-bottom: 30px
}

.drop .drop-title span {
    font-weight: normal
}

.drop form {
    width: 70%;
    margin: auto;
}

.drop form input {
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px
}

.drop form .form-input {
    overflow: hidden
}

.drop form .form-input input {
    width: 49%;
}

.drop form .form-input input[type=text] {
    float: left
}

.drop form .form-input input[type=email] {
    float: right
}

.drop form input.sub {
    width: 100%;
}

.drop form textarea {
    width: 100%;
    outline: 0;
    background: #ccc
}

.drop form input[type=submit] {
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
}
*/