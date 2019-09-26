import UrlKey from '../constants/url-key'

class UrlService {
    get = key => {
        console.log(window.location.pathname)
        console.log(window.location.search)
        const regex = new RegExp('[\\?&]' + key + '=([^&#]*)')
        const results = regex.exec(window.location.search)
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
    }

    getUnit = () => {
        return this.get(UrlKey.UNIT)
    }

    getSlide = () => {
        return this.get(UrlKey.SLIDE)
    }

    updateSlide = newPage => {
        const slideSearch = UrlKey.SLIDE.concat('=')

        if(window.location.search.search(slideSearch.concat(this.getSlide())) > 0){
            const newSearch = window.location.search.replace(slideSearch.concat(this.getSlide()), slideSearch.concat(newPage))
            window.history.pushState(null, null, window.location.pathname.concat(newSearch))
        } else {
            console.log(window.location.pathname)
            const newSearch = window.location.search.concat('&').concat(slideSearch).concat(newPage)
            window.history.pushState(null, null, window.location.pathname.concat(newSearch))
        }
    }

    updateUnit = newUnit => {
        const unitSearch = UrlKey.UNIT.concat('=')

        if(window.location.search.search(unitSearch.concat(this.getUnit())) > 0){
            const newSearch = window.location.search.replace(unitSearch.concat(this.getUnit()), unitSearch.concat(newUnit))
            window.history.pushState(null, null, window.location.pathname.concat(newSearch))
        } else if (window.location.pathname.length > 1){
            const newSearch = '?'.concat(unitSearch).concat(newUnit)
            window.history.pushState(null, null, window.location.pathname.concat(newSearch))
        } else {
            const pathname = '/index.html?'.concat(unitSearch).concat(newUnit)
            window.history.pushState(null, null, pathname)
        }
    }
}

export default (new UrlService())

