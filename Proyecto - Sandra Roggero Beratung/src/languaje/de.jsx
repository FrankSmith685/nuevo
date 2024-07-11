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
            { title: "STUDIUM",image:optimizedImageURL('v1719434278/ocddglzj4wpc5lbidcve.jpg') },
            { title: "AUSBILDUNG",image:optimizedImageURL('v1719434278/rru0wddozzlje8tv7wo7.jpg') },
            { title: "PARKTIKUM",image:optimizedImageURL('v1720047308/qhowjwv3jbywvh3fgqeb.jpg') },
            { title: "ARBEIT",image:optimizedImageURL('v1720047637/okxctjjmmdegr4ptljhn.jpg') },
            { title: "STEUERN",image:optimizedImageURL('v1720047700/pqjjlckzyuvgt32bxkhk.jpg') },
            { title: "WOHNEN",image:optimizedImageURL('v1720616614/cebiafyysmleabgeofvi.jpg') },
            { title: "BEFÖRDERUNG",image:optimizedImageURL('v1720622228/omcgfbrslqda69acfxr0.jpg') },
            { title: "VISUM",image:optimizedImageURL('v1720648648/yazfttcufijofwthhes8.jpg') },
            { title: "SPRACHE",image:optimizedImageURL('v1720652893/zwpk88oskknftyafqm5u.jpg') },
        ],
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
        
    },
    footer:{
        Informationen:{title:"Informationen",links:[
            {link:"/benutzerrechte",detail:"Benutzerrechte"},
            {link:"/datenschutzrichtlinie",detail:"Datenschutzrichtlinie"},
        ]},
        MeineDienstleistungen:{title:"Meine Dienstleistungen",links:[
            {link:"/meine-dienstleistungen/studium-ausbildung-praktikum",detail:"Studium - Ausbildung - Praktikum"},
            {link:"/meine-dienstleistungen/arbeit-steuern",detail:"Arbeit - Steuern"},
            {link:"/meine-dienstleistungen/wohnen-transport",detail:"Wohnen - Beförderung"},
            {link:"/meine-dienstleistungen/visum-sprache",detail:"Visum - Sprache"},
        ]},
        Kontakt:{title:"Kontakt",links:[
            {detail:"Email: kontakt@sandra-roggero.de"},
            {detail:"Telefon: +49 123 456 789"},
            {detail:"Adresse: Musterstraße 1, 12345 Musterstadt, Deutschland"},
            {detail:"Öffnungszeiten: Mo-Fr, 9:00 - 18:00 Uhr"},
        ]},
        info:"2024 Alle Rechte vorbehalten"
    },
    Unternehmen:{
        PersonalauswahlUndRekrutierung:{
            title:"Personalauswahl und Rekrutierung",
            description:"Wir engagieren uns in jedem Auswahlverfahren, als ob es sich um unser eigenes Unternehmen handelt, indem wir uns auf die Menschen konzentrieren und ihnen zuhören, egal ob es sich um Bewerber oder Kunden handelt. Dabei nimmt Beratung und das Erkennen von Bedürfnissen einen hohen Stellenwert ein. Weiterhin begleiten und gewährleisten wir dank unseres eigenen Dienstes „Onboarding Selektion“ die bestmögliche Integration der Kandidaten in das Unternehmen. Wir sind Personalvermittler und Integrations Coaches. Der Onboarding-Prozess konzentriert sich nicht nur auf das Follow-up nach der Auswahl, sondern wir begleiten den Prozess von Anfang an, immer im Einklang mitdem Auftrag und dem Ziel des Unternehmens. Jeder Auswahlprozess ist einzigartig, denn keine zwei Personen oder Unternehmen sind gleich. Es gibt eine Lösung für jedes Unternehmen, und wir von Sandra Roggero-Beratung wissen, wie man sie findet."
        },
        Personalbewertungen:{
            title:"Personalbewertungen",
            description:"Die Leistungsbewertung ist ein wichtiges Instrument zur Steigerung der Produktivität. Wenn Sie die Fähigkeiten Ihrer Teams kennen und wissen, was sie zum Unternehmen beitragen können, können Sie ihnen die notwendigen Instrumente an die Hand geben, um sowohl ihre berufliche Entwicklung als auch die des Unternehmens zu fördern.",
            description2:"Sandra Roggero Beratung hilft Ihnen, Ihre Teams zu bewerten, indem wir uns auf die Menschen konzentrieren.",
            dataInfo:[
                "Erkennen und entwickeln Sie die einzigartigen Talente Ihres Unternehmens.",
                "Durchführung von Evaluierungen, die auf Ihre Herausforderungen und Ihr Team zugeschnitten sind.",
                "Belohnung der Produktivität und Leistung von Mitarbeitern im Rahmen von internen Förderungs- oder Auswahlprozessen.",
                "Messung persönlicher Kompetenzen, des Potenzial und den Interessen der Mitarbeiter anhand der Unternehmensstrategie und der Unternehmensziele.",
                "Einbindung von Kompetenzentwicklungsplänen, die auf die jeweilige Person und Position zugeschnitten sind."
            ]

        },
        International:{
            title:"International",
            description:"Wenn es darum geht internationale Talente und Arbeitskräfte zu konsolidieren, ist es notwendig, über Profile mit spezifischer Erfahrung und Expertisen zu verfügen, sei es auf nationaler oder internationaler Ebene, um die nächste Phase des Unternehmens voranzutreiben.",
            description2:"Wir begleiten Sie bei internationalen Projekten, indem wir das Talentmanagement und die Auswahlprozesse steuern, um die richtigen Fachkräfte in Deutschland und/oder im Ausland zu finden.",
            description3:"EINE SPEZIALISIERTE ABTEILUNG",
            description4:"Wir finden die richtigen Fachleute, unabhängig von Ihrem Wohnort.",
            description5:"Unsere direkte und proaktive Suchmethodik auf dem Markt, unsere internationale Erfahrung, unser Hauptsitz in Peru und unsere Mitarbeiter in der ganzen Welt helfen uns, die qualifiziertesten Talente zu finden.",
        },
        Inklusionsaudit:{
            title:"Inklusionsaudit",
            description:"Wir identifizieren Vorurteile und beseitigen Hindernisse im Auswahlprozess. Auswahlprozesse haben sich im Laufe der Zeit weiterentwickelt und zusätzliche Systeme, Inhalte oder Technologien sind entstanden. Auch wenn diese Prozesse einen funktionierenden Service und Erfahrungbei der Talentauswahl bieten, werden wahrscheinlich in jeder Phase Ihres Prozesses dennoch Vorurteile bestehen. Unser Inclusivity-Auditanalysiert jeden Kontaktpunkt mit dem Kandidaten während des Auswahlprozesses, von der Stellenbeschreibung für diese Position über Ihren internen Talentbereich, den Bewerbungsprozess, das Vorstellungsgespräch und die Auswahl bis hin zum Onboarding. Dieser Ansatz bietet durchgängige Transparenz in Bezug auf aktive und versteckte Barrieren und Vorurteile."
        },
        Funktionen:{
            title:"Funktionen",
            description:"Identifizierung von Talenten, Kenntnis und Entwicklung des Humankapitals. Verständnis des Arbeitsmarktes, um neue Bedürfnisse zu erkennen und die vom Unternehmen kurzfristig benötigten Profile vorherzusehen. Um die besten Wege zu finden, sie in das Unternehmen einzugliedern. Einbindung von Fachkräften in die verschiedenen Bereiche des Unternehmens, sich über ihre Fähigkeiten im Klaren sein und wissen, wie sie einen Mehrwert für das Unternehmen schaffen können. Schaffung einer soliden Unternehmenskultur."
        },
        FachspezifischeSuche:{
            title:"Fachspezifische Suche",
            description:"Die Menschen sind das Herzstück eines jeden Projekts.Die Auswahl qualifizierter Mitarbeiter ist sicherlich einer der wichtigsten Faktoren, wenn es darum geht,alle Ziele Ihres Unternehmens zu erreichen. Daher muss die Einbeziehung von Berufsprofilen, zu den Wertenund der Mission Ihres Unternehmens passen und eine Ihrer Prioritäten sein. Um die begehrtesten, qualifiziertenTalente anzuziehen, müssen Sie die einzigartige Geschichte hinter Ihrem Unternehmen erzählen. Deshalb ist es wichtig, die Unterstützung und das Fachwissen einer spezialisierten Personalberatung in Anspruch zu nehmen, die weiß, was Sie wirklich brauchen und über ein breites Netzwerk von Fachkräften verfügt, die das Potenzial in einem Unternehmen wie dem Ihren voll ausschöpfen wollen. Bei Sandra Roggero-Beratung blicken wir über die Stellenbeschreibung hinaus, um die Geschichte zu verstehen, die Ihr Unternehmen erzählt und bringen Sie mit den richtigenLeuten zusammen, die Ihnen helfen, Ihr Unternehmen umzugestalten."
        },
        homeInfo2:"MÖCHTEN SIE WEITERE INFORMATIONEN?",
        homeInfo3:"Kontaktaufnahme",
    }
}

export default de;