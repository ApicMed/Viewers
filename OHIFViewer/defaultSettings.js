Meteor.startup(function() {
    if (Meteor.settings) {
        console.log('Using custom LesionTracker settings: ');
        console.log(Meteor.settings);
        return;
    }

    Meteor.settings = {
        dicomWeb: {
            endpoints: [{
                name: 'Orthanc',
                wadoUriRootNOTE: 'either this uri is not correct for wado-uri or wado-uri is not configured on orthanc currently',
                wadoUriRoot: 'http://localhost:8043/wado',
                qidoRoot: 'http://localhost:8042/dicom-web',
                wadoRoot: 'http://localhost:8042/dicom-web',
                qidoSupportsIncludeField: false,
                imageRendering: 'wadouri',
                requestOptions: {
                  auth: 'orthanc:orthanc',
                  logRequests: true,
                  logResponses: false,
                  logTiming: true
              }
            }]
        },
        dimse: {
            host: 'localhost',
            port: 4242,
            hostAE: 'ORTHANC'
        },
        defaultServiceType: 'dicomWeb'
        //defaultServiceType: 'dimse'
    };

    console.log('Using default OHIF Viewer settings with service: ' + Meteor.settings.defaultServiceType);
});