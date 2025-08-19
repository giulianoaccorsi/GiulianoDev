//
//  BlogPostCard.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

struct BlogPostCard: HTML {
    
    var article: Article
    
    var body: some HTML {
        VStack(alignment: .leading) {
            if let image = article.imageHTML {
                image
            }
            VStack(alignment: .leading) {
                HStack {
                    article.dateAndReadTimeHTML
                    Spacer()
                }
                .frame(width: .percent(100%))
                Spacer(size: .small)
                Text(article.title)
                    .font(.pressStart2P)
                    .font(.lead)
            }
            .padding(.medium)
            .class("bg-body-secondary")
            .frame(width: .percent(100%))
        }
        .frame(maxWidth: .px(600))
        .border(.dimGray)
        .cornerRadius(20)
        .clipped()
        .margin(.vertical, .medium)
    }
}
