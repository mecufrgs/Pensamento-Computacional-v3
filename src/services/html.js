class HTMLService {
    pageUp = () => {
        document.body.scrollTop = 0 
        document.documentElement.scrollTop = 0 
    }
    setOverflowHidden = () => {
        document.body.style.overflow = 'hidden'
    }
    setOverflowVisible = () => {
        document.body.style.overflow = 'visible'
    }
}

export default (new HTMLService())

