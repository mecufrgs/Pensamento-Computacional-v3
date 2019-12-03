let state = {
    unit: document.title,
    slide: 1
}

const api = new window.BridgeRestApi()

function startApp() {
    
    const slide = (state.slide).toString().split('"').join('')
    window.location = "../index.html?unit=".concat(state.unit).concat("&slide=").concat(slide)
    try{
        api.registrarUltimaPaginaAcessada(state.unit, '')
    } catch{}

}

function getSavedUnitCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)

    if(info.detail.status === 200 && state.unit === info.detail.data[0].valor){
        getSavedSlide()
    } else {
        api.registrarDadosGenericos('unit', state.unit)
        api.registrarDadosGenericos('slide', 1)
        startApp()
    }
}

function getSavedUnit() {
    window.addEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)
    try{
        api.obterDadosGenericos('unit')
    } catch {
        throw Error('Erro ao buscar unidade salva do AVAMEC')
    }
}

function getSavedSlideCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', this.getSavedSlideCallback, false)
    if(info.detail.status === 200){
        state.slide = info.detail.data[0].valor
        startApp()
    } else {
        api.registrarDadosGenericos('slide', state.slide)
        startApp()
    }
}

function getSavedSlide() {
    window.addEventListener('evObtemDadosGenericos', getSavedSlideCallback, false)
    try{
        api.obterDadosGenericos('slide')
    } catch {
        throw Error('Erro ao buscar slide salvo do AVAMEC')
    }
}


getSavedUnit()
