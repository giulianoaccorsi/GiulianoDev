//
//  RedirectLayout.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

struct RedirectLayout: Layout {
    
    var redirect: URL
    
    var body: some Document {
        Head {
            Title("Redirecting...")
            let urlString = redirect.absoluteString
            MetaLink(href: urlString, rel: .canonical)
            MetaTag(httpEquivalent: "refresh", content: "0; url=\(urlString)")
        }
        Body {
            Text("Redirecting...")
        }
    }
}

struct RedirectPage: StaticPage {
    
    var title = "Redirecting..."
    var redirect: URL
    var path: String
    
    var layout: some Layout {
        RedirectLayout(redirect: redirect)
    }
    
    var body: some BodyElement {
        EmptyHTML()
    }
}



