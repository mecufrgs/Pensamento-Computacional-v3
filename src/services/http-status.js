class HttpStatus {    
    isError = (status) => {
        return status >= 400 || status === undefined
    }
}

export default (new HttpStatus())

