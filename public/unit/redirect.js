let state = {
    unit: document.title,
    slide: 1
}

console.log('document title')
console.log(document.title)

const api = new window.BridgeRestApi()

function startApp() {
    const slide = (state.slide).toString().split('"').join('')
    window.location = "../index.html?unit=".concat(state.unit).concat("&slide=").concat(slide)
}

function getSavedUnitCallback(info) {
    window.removeEventListener('evObtemDadosGenericos', getSavedUnitCallback, false)
    if(info.detail.status === 200 && state.unit === info.detail.data[0].valor){
        console.log('Última unidade logada é a unidade atual, carregando página... unidade:' + info.detail.data[0].valor)
        getSavedSlide()
    } else {
        console.log('Última unidade logada é diferente da unidade atual, salvando nova unidade... unidade:' + state.unit)
        api.registrarDadosGenericos('unit', state.unit)
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
        console.log('Última página é: ' + info.detail.data[0].valor)
        state.slide = info.detail.data[0].valor
        startApp()
    } else {
        console.log('Última página inexistente, salvando página: ' + state.slide)
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
