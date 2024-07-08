const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_800/${url}`;
  };

const de = {

    menu2 : [
        { id:0, path: "/unternehmen/#", label: "Unternehmen", subTema: "Wir wählen die Fachleute aus, die Ihr Unternehmen braucht und fördern neue, der heutigen Zeit angepasste Führungsstile.", subItems: [
            { path: "/unternehmen/personalauswahl-und-rekrutierung", label: "Personalauswahl und Rekrutierung" },
            { path: "/unternehmen/personalbewertungen", label: "Personalbewertungen" },
            { path: "/unternehmen/international", label: "International" },
            { path: "/unternehmen/funktionen", label: "Funktionen" },
            { path: "/unternehmen/fachspezifische-suche", label: "Fachspezifische Suche" },
            { path: "/unternehmen/inklusionsaudit", label: "Inklusionsaudit" },
        ]},
        { id:1, path: "/kandidaten/#", label: "Kandidaten", subTema: "Wir unterstützen Sie auf dem Weg zu Ihrer Karriere. Nutzen Sie unsere Stellenangebote, Karriereberatung und digitalen Ressourcen.", subItems: [
            { path: "/kandidaten/registrieren-sie-ihren-lebenslauf", label: "Registrieren Sie Ihren Lebenslauf" },
            { path: "/kandidaten/internationales-karrieremanagement", label: "Internationales Karrieremanagement" },
        ]},
        { id:2, path: "/wir/#", label: "Wir", subTema: "Erfahren Sie mehr über unser Unternehmen und unsere Werte.", subItems: [
            { path: "/wir/wer-wir-sind", label: "Wer Wir Sind" },
            { path: "/wir/unsere-philosophie", label: "Unsere Philosophie" },
        ]},
        { id:3, path: "/meine-dienstleistungen", label: "Meine Dienstleistungen", subTema: "Wir bieten Dienstleistungen für Ihre akademische, berufliche und persönliche Entwicklung, einschließlich Studium, Arbeit, Wohnen, Beförderung, Visa und Sprachen.", subItems: [
            { path: "/meine-dienstleistungen/studium-ausbildung-praktikum", label: "Studium - Ausbildung - Praktikum" },
            { path: "/meine-dienstleistungen/arbeit-steuern", label: "Arbeit - Steuern" },
            { path: "/meine-dienstleistungen/wohnen-beförderung", label: "Wohnen - Beförderung" },
            { path: "/meine-dienstleistungen/visum-sprache", label: "Visum - Sprache" },
        ]},
        { id:4, path: "/kontakt", label: "Kontakt" },
    ],

    home: {
        texts:["INNOVATIVEN LÖSUNGEN?", "QUALIFIZIERTEN KANDIDATEN?","EINER PROFESSIONELLEN VERBESSERUNG?"],
        text1:"SUCHEN SIE NACH",
        infoItems:[
            { title: "Personalauswahl und Rekrutierung", description: "Wir bieten individuelle Unterstützung in Auswahlverfahren und Integration für Bewerber und Kunden.", path: "/unternehmen/personalauswahl-und-rekrutierung" },
            { title: "Personalbewertungen", description: "Unterstützung bei der Talentidentifizierung, Humankapitalentwicklung, Einbindung von Fachkräften und Schaffung einer starken Unternehmenskultur.", path: "/unternehmen/personalbewertungen" },
            { title: "International", description: "Sandra Roggero-Beratung hilft bei der Teambewertung und -Entwicklung durch maßgeschneiderte Evaluierungen und individuelle Kompetenzpläne.", path: "/unternehmen/international" },
            { title: "Funktionen", description: "Die Auswahl passender Mitarbeiter ist entscheidend. Sandra Roggero hilft, Talente anzuziehen, die Ihre Geschichte teilen und Ihr Unternehmen formen können.", path: "/unternehmen/funktionen" },
            { title: "Fachspezifische Suche", description: "Sandra Roggero-Beratung unterstützt Unternehmen weltweit bei der Rekrutierung von Fachkräften durch Talentmanagement und Auswahlprozesse.", path: "/unternehmen/fachspezifische-suche" },
            { title: "Inklusionsaudit", description: "Wir überwinden Vorurteile im Auswahlprozess durch ein Inklusionsaudit, das jeden Schritt von der Stellenbeschreibung bis zum Onboarding analysiert.", path: "/unternehmen/inklusionsaudit" }
        ],
        detail1:" Wir tragen jeden Tag dazu bei, dass Menschen eine tiefe Erfüllung auf ihrem beruflichen Weg erfahren und persönlich wachsen.",
        detail2:" Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen.",
        detail3:" Kontaktaufnahme",
        homeInfo1: "DIE GESELLSCHAFT VERÄNDERT SICH, DIE FÜHRUNGSSTILE ENTWICKELN SICH WEITER, WARUM ALSO NICHT AUCH DAS AUSWAHLVERFAHREN WEITERENTWICKELN?",
        infoItems2:  [
            { title: "INNOVATION", description: "Heute geht es um mehr als nur darum, 'schnell' neue Mitarbeiter zu finden. Es geht um den Aufbau optimaler Arbeitsteams, die sich aus einer sinnvoll strukturierten Organisation im Einklang mit den Unternehmenszielen zusammensetzen. Deshalb brauchen Unternehmen einen Partner, der den Markt versteht und über praktische Erfahrungen verfügt.",
            image: optimizedImageURL('v1719429422/bxeybnb6rq6jqnlpd3t1.jpg')
            },
            { title: "RECRUITING KOMPETENZ", description: "Gründliche Bewertung unserer Kandidaten, damit unsere Firmenkunden optimale Arbeitsteams bilden können, die sich aus engagierten, disziplinierten und gut strukturierten jungen Menschen und/oder Erwachsenen zusammensetzen, die Ihren Unternehmenszielen entsprechen.",
            image: optimizedImageURL('v1719432618/xfum9gljkffxtjhfd5tu.jpg')
            },
            { title: "VISION", description: "Unser Ziel ist es, hochperformante Teams zu schaffen, die Unternehmensziele erreichen und zu einer positiven, inklusiven Arbeitskultur beitragen.",
            image: optimizedImageURL('v1719875148/cl4jynz7brqnggwvxwzm.jpg')
            },
            { title: "NEUE WEGE IN DER PERSONALBESCHAFFUNG", description: "Mit frischen Ideen und leidenschaftlichem Engagement streben wir danach, den Bereich der Personalbeschaffung zu revolutionieren.",
            image: optimizedImageURL('v1719875147/jghjwlvwkdizzhrdpb4r.jpg')
            }
        ],
        tituloServicio:"Als HR-Beratung können wir Ihnen auch bei Folgendem helfen:",
        services: [
            { title: "STUDIUM" },
            { title: "AUSBILDUNG" },
            { title: "PARKTIKUM" },
            { title: "ARBEIT" },
            { title: "STEUERN" },
            { title: "WOHNEN" },
            { title: "BEFÖRDERUNG" },
            { title: "VISUM" },
            { title: "SPRACHE" },
        ],
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
    }
}

export default de;