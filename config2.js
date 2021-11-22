var config = {
    //style: 'mapbox://styles/branigan/cjz37rcb003ib1cr3s8rnkt2d',
    style: 'mapbox://styles/npumar/ckw6ieolh2mme14o566fyu4v2',
    //accessToken: 'pk.eyJ1IjoibWJ4c29sdXRpb25zIiwiYSI6ImNrMm01aG9hdTBlZGwzbXQ1ZXVrNHNmejAifQ.QHQA0N6XPWddCXtvoODHZg',
    accessToken: 'pk.eyJ1IjoibnB1bWFyIiwiYSI6ImNrdjBxaHN2YTBrNDAycGxwdmN4a285cTkifQ.LdhZ_IF2ygSLghzgY5elLA',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Erupción La palma 2021',
    subtitle: 'Volcán de Cumbre Vieja',
    byline: 'EBATINCA 2021',
    footer: 'Fuente: datos de Copernicus e IGN',
    chapters: [
        {
            id: 'entrada',
            alignment: 'full',
            title: 'Isla de La Palma',
            image: 'vista_LaPalma.jpg',
            description: 'La isla tiene una superficie de 708,32 km (9,45 % del territorio canario)​ y una población censada de 82 671 habitantes (INE, enero de 2019).​ Su territorio es muy abrupto y alcanza los 2426 m en el Roque de los Muchachos, punto más elevado de la isla, que la convierte, tras Tenerife, en la segunda isla con mayor altitud de Canarias.<br>En el tercio norte de La Palma se encuentra una gran depresión de origen erosivo que forma la Caldera de Taburiente, declarada parque nacional en 1954.​ Desde el centro de la isla hacia el sur, en la llamada Cumbre Vieja, se encuentra una serie de volcanes entre los que se destacan el volcán de San Antonio, volcán de San Juan y el Teneguía (penúltima erupción volcánica terrestre de España, en 1971).​ La Palma también posee el parque natural de Cumbre Vieja,​ el parque natural de Las Nieves​ y una serie de entidades protegidas de menor tamaño y grado de protección.',
            location: {
                center: [-17.86966, 28.69396],
                zoom: 8.75,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                //{
                    //layer: 'fajana-21092021',
                    //opacity: 0.25
                //}
            ],
            onChapterExit: [
                //{
                //    layer: 'fajana-21092021',
                //    opacity: 0
                //}
            ]
        },
        {
            id: 'erupcion1',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'A final de septiembre, después de unos días con valores de abombamiento altos y enjambres sísmicos, el volcán de Cumbre Vieja entra en erupción.',
            location: {
                center: [-17.88727, 28.61047],
                zoom: 11.5,
                pitch: 60.00,
                bearing: 51.20
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        {
            id: 'semana0',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'La erupción en los primeros días cubrió XXX hectáreas, afectando a viviendas y cultivos.',
            location: {
                center: [-17.88727, 28.61047],
                zoom: 12.82,
                pitch: 60.00,
                bearing: 51.20
            },
            onChapterEnter: [
                {
                    layer: 'fajana-21092021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-21092021',
                    opacity: 0
                },
                {
                    layer: 'fajana-21092021L',
                    opacity: 0.8
                }

            ]
        },
        {
            id: 'semana1',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'En la primera semana el incremento de superficie afectada fue del 219%, con 338.3 ha, afectando al núcleo de población de Todoque y llegando al mar.',
            location: {
                center: [-17.88727, 28.61047],
                zoom: 12.82,
                pitch: 60.00,
                bearing: 51.20
            },
            onChapterEnter: [
                {
                    layer: 'fajana-29092021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-29092021',
                    opacity: 0
                },
                {
                    layer: 'fajana-29092021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-21092021L',
                    opacity: 0
                }
            ]
        },
        {
            id: 'semana2',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'En la segunda semana la erupción ya tenía tres frentes llegando a la costa, con una superficie afectada de 656 ha.<br>En este momento ya se ha producido el principal aporte de material a la <a href="https://es.wikipedia.org/wiki/Fajana" target="new">fajana</a>.',
            location: {
                center: [-17.91549, 28.60885],
                zoom: 13.45,
                pitch: 60.00,
                bearing: 82.80
            },
            onChapterEnter: [
                {
                    layer: 'fajana-12102021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-12102021',
                    opacity: 0
                },
                {
                    layer: 'fajana-12102021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-29092021L',
                    opacity: 0
                }
            ]
        },
        {
            id: 'semana3',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'SEMANA 3',
            location: {
                center: [-17.91549, 28.60885],
                zoom: 13.45,
                pitch: 60.00,
                bearing: 82.80
            },
            onChapterEnter: [
                {
                    layer: 'fajana-22102021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-22102021',
                    opacity: 0
                },
                {
                    layer: 'fajana-22102021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-12102021L',
                    opacity: 0
                }
            ]
        },
        {
            id: 'semana4',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'SEMANA 4',
            location: {
                center: [-17.90904, 28.61110],
                zoom: 12.54,
                pitch: 32.50,
                bearing: 110.90
            },
            onChapterEnter: [
                {
                    layer: 'fajana-29102021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-29102021',
                    opacity: 0
                },
                {
                    layer: 'fajana-29102021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-22102021L',
                    opacity: 0
                }
            ]
        },
        {
            id: 'semana5',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'SEMANA 5',
            location: {
                center: [-17.91549, 28.60885],
                zoom: 13.45,
                pitch: 60.00,
                bearing: 82.80
            },
            onChapterEnter: [
                {
                    layer: 'fajana-06112021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-06112021',
                    opacity: 0
                },
                {
                    layer: 'fajana-06112021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-29102021L',
                    opacity: 0
                }
            ]
        },
        {
            id: 'semana6',
            alignment: 'right',
            hidden: false,
            title: 'Proceso volcánico Cumbre Vieja',
            image: '',
            description: 'SEMANA 6',
            location: {
                center: [-17.91549, 28.60885],
                zoom: 13.45,
                pitch: 60.00,
                bearing: 82.80
            },
            onChapterEnter: [
                {
                    layer: 'fajana-15112021',
                    opacity: 0.5
                }
            ],
            onChapterExit: [
                {
                    layer: 'fajana-15112021',
                    opacity: 0
                },
                {
                    layer: 'fajana-15112021L',
                    opacity: 0.8
                },
                {
                    layer: 'fajana-06112021L',
                    opacity: 0
                }
            ]
        }





//////////////FINAL         
    ]
};
