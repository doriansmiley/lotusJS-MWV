/**
 * Created by dsmiley on 2/10/14.
 */
SampleApp.HttpServiceFactory = function(){
    if (SampleApp.HttpServiceFactory.instance != null) {
        throw( 'SampleApp.HttpServiceFactory.instance: Singleton class has already been instantiated' );
    } else {
        //perform any required object set up
    }
}

SampleApp.HttpServiceFactory.getInstance = function(){
    if (SampleApp.HttpServiceFactory.instance == null) {
        SampleApp.HttpServiceFactory.instance = new SampleApp.HttpServiceFactory();
    }
    return SampleApp.HttpServiceFactory.instance;
}

SampleApp.HttpServiceFactory.instance = null;

SampleApp.HttpServiceFactory.prototype.getHttpService = function( config ){
    var httpService;
    switch( config.httpServiceCode ){
        case "angular":
            httpService = new Lavender.AngularHttpService();
            break;
        case "jquery":
            httpService = new Lavender.JqueryHttpService();
            break;
        default:
            httpService = new Lavender.XhrHttpService();
            break;
    }
    return httpService;
}

//returns constructor used for injection
SampleApp.HttpServiceFactory.prototype.getHttpServiceForInjection = function( config ){
    var httpService;
    switch( config.httpServiceCode ){
        case "angular":
            httpService = Lavender.AngularHttpService;
            break;
        case "jquery":
            httpService = Lavender.JqueryHttpService;
            break;
        default:
            httpService = Lavender.XhrHttpService;
            break;
    }
    return httpService;
}
