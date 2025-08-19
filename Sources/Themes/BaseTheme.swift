//
//  BaseTheme.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Ignite
import SwiftUI

protocol BaseTheme: Theme {}

struct LightTheme: BaseTheme {
    let colorScheme = Ignite.ColorScheme.light
}

struct DarkTheme: BaseTheme {
    let colorScheme = Ignite.ColorScheme.dark
}

// MARK: Fonts

extension BaseTheme {
    
    var font: Ignite.Font { .nunito }
    var headingFont: Ignite.Font { .pressStart2P }
}

// MARK: Colors

extension BaseTheme {
    
    var accent: Ignite.Color { color(.accent) }
    var primary: Ignite.Color { color(.Text.primary) }
    
    var background: Ignite.Color { color(.Background.primary) }
    var secondaryBackground: Ignite.Color { color(.Background.secondary) }
    
    var border: Ignite.Color { color(.Border.primary) }
    
    private func color(_ asset: ColorAsset) -> Ignite.Color {
        return .init(asset, scheme: colorScheme)
    }
}

// MARK: Sizes

extension BaseTheme {
    
    var siteWidth: ResponsiveValues {
        .init(
            large: .px(700),
            xLarge: .px(900),
            xxLarge: .px(900)
        )
    }
}
