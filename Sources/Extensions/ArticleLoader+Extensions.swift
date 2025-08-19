//
//  ArticleLoader+Extensions.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite

enum ArticleType: String {
    case blog
}

extension ArticleLoader {
    
    func typed(_ type: ArticleType) -> [Article] {
        self.typed(type.rawValue)
    }
}
