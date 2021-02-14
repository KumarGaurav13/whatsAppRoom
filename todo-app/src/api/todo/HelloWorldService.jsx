import axios from 'axios';

export const executeHelloWorldBeanService = () => {
    return (
        axios.get('http://localhost:8080/hello-world-bean')
    )
}

export const executeHelloWorldService = () => {
    return (
        axios.get('http://localhost:8080/hello-world')
    )
}

export const executeHelloWorldPathVariableService = (name) => {
    return (
        axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
    )
}





