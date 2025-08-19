//
//  File.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 20/08/25.
//

import Foundation
import Ignite

struct HighlightCard: HTML {
    var title: String
    var blurb: String
    var imagePath: String
    var technologies: [String]
    var appStoreURL: String?
    var githubURL: String?
    
    var body: some HTML {
        Section {
            Image(imagePath, description: title)
                .class("rounded-4 shadow-sm w-100")
            
            VStack(alignment: .leading) {
                Text(title)
                    .font(.title1)
                    .class("mb-3")
                
                Text(blurb)
                    .font(.body)
                    .class("mb-3")
                
                Text("Technologies: " + technologies.joined(separator: ", "))
                    .class("text-muted mb-4")
                if let githubURL = githubURL {
                    Link(target: githubURL) {
                        Image(
                            "/media/projects/github.png",
                            description: "GitHub"
                        ).frame(width: 140, height: 40)
                    }
                }
            }
            .class("p-3")
        }
        .class("d-grid gap-4 align-items-center")
        .class("grid-template-columns-md-2")
        .class("bg-body-secondary rounded-4 p-4")
    }
}
