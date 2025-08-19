//
//  MetaTag+Extensions.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite
import SwiftUI

extension MetaTag {
    
    static func themeColor(
        _ asset: ColorAsset,
        scheme: Ignite.ColorScheme
    ) -> MetaTag {
        let color = Ignite.Color(asset, scheme: scheme)
        let content = "rgb(\(color.red) \(color.green) \(color.blue))"
        let media = "(prefers-color-scheme: \(scheme.rawValue)"
        return MetaTag(name: "theme-color", content: content)
            .customAttribute(name: "media", value: media)
    }
}
