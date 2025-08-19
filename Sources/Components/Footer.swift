//
//  Footer.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

struct Footer: HTML {
    
    var body: some HTML {
        VStack(alignment: .center, spacing: .medium) {
            SocialFooter()
            
            VStack(alignment: .center) {
                Text("Copyright © Giuliano Accorsi \(Date().year)")
                igniteFooter
            }
            .fixedSize()
        }
        .font(.body)
    }
    
    private var igniteFooter: some HTML {
        Text {
            "Created in Swift with "
            Link("Ignite", target: "https://github.com/twostraws/Ignite")
                .target(.newWindow)
                .relationship(.noOpener)
                .role(.none)
        }
    }
}
