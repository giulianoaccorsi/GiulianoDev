//
//  Files.swift
//  IgniteStarter
//
//  Created by Giuliano Accorsi on 19/08/25.
//

import Foundation

enum Files {
    enum Css {
        static let typewriterCursorCss = File(
            name: "typewriter-cursor",
            ext: "css",
            relativePath: "css",
            mimeType: "text/css"
        )
    }
    enum Fonts {
        static let nunitoVariableFontWghtTtf = File(
            name: "Nunito-VariableFont_wght",
            ext: "ttf",
            relativePath: "fonts",
            mimeType: "font/ttf"
        )
        static let pressStart2PRegularTtf = File(
            name: "PressStart2P-Regular",
            ext: "ttf",
            relativePath: "fonts",
            mimeType: "font/ttf"
        )
    }
    enum Media {
        static let imagesTxt = File(
            name: "Images",
            ext: "txt",
            relativePath: "media",
            mimeType: "text/plain"
        )
        static let pixAvatarWebp = File(
            name: "PixAvatar",
            ext: "png",
            relativePath: "media",
            mimeType: "image/png"
        )
        static let giulianoAccorsiIconPng = File(
            name: "Giuliano Icon",
            ext: "png",
            relativePath: "media",
            mimeType: "image/png"
        )
        enum Favicons {
            static let appleTouchIconPng = File(
                name: "apple-touch-icon",
                ext: "png",
                relativePath: "media/favicons",
                mimeType: "image/png"
            )
            static let faviconIco = File(
                name: "favicon",
                ext: "png",
                relativePath: "media/favicons",
                mimeType: "image/png"
            )
            static let favicon96x96Png = File(
                name: "favicon-96x96",
                ext: "png",
                relativePath: "media/favicons",
                mimeType: "image/png"
            )
            static let siteWebmanifest = File(
                name: "site",
                ext: "webmanifest",
                relativePath: "media/favicons",
                mimeType: "application/octet-stream"
            )
            static let webAppManifest192x192Png = File(
                name: "web-app-manifest-192x192",
                ext: "png",
                relativePath: "media/favicons",
                mimeType: "image/png"
            )
            static let webAppManifest512x512Png = File(
                name: "web-app-manifest-512x512",
                ext: "png",
                relativePath: "media/favicons",
                mimeType: "image/png"
            )
        }
        enum MacOsKeyboardNavigation {
            static let headerWebp = File(
                name: "header",
                ext: "webp",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "image/webp"
            )
            static let keyboardNavigationSettingsDarkWebp = File(
                name: "keyboard-navigation-settings-dark",
                ext: "webp",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "image/webp"
            )
            static let keyboardNavigationSettingsLightWebp = File(
                name: "keyboard-navigation-settings-light",
                ext: "webp",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "image/webp"
            )
            static let knDisabledDarkMp4 = File(
                name: "kn_disabled-dark",
                ext: "mp4",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "video/mp4"
            )
            static let knDisabledLightMp4 = File(
                name: "kn_disabled-light",
                ext: "mp4",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "video/mp4"
            )
            static let knEnabledDarkMp4 = File(
                name: "kn_enabled-dark",
                ext: "mp4",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "video/mp4"
            )
            static let knEnabledLightMp4 = File(
                name: "kn_enabled-light",
                ext: "mp4",
                relativePath: "media/mac-os-keyboard-navigation",
                mimeType: "video/mp4"
            )
        }
    }
    
    enum Scripts {
        static let cusdisThemeSupportJs = File(
            name: "cusdis-theme-support",
            ext: "js",
            relativePath: "scripts",
            mimeType: "text/javascript"
        )
        static let themeAwareVideoJs = File(
            name: "theme-aware-video",
            ext: "js",
            relativePath: "scripts",
            mimeType: "text/javascript"
        )
        static let typewriterJs = File(
            name: "typewriter",
            ext: "js",
            relativePath: "scripts",
            mimeType: "text/javascript"
        )
    }
}

// MARK: - File

struct File {
    let name: String
    let ext: String?
    let relativePath: String
    let mimeType: String
    
    var url: URL {
        return url(locale: nil)
    }
    
    func url(locale: Locale?) -> URL {
        let bundle = BundleToken.bundle
        let url = bundle.url(
            forResource: name,
            withExtension: ext,
            subdirectory: relativePath,
            localization: locale?.identifier
        )
        guard let result = url else {
            let file = name + (ext.flatMap { ".\($0)" } ?? "")
            fatalError("Could not locate file named \(file)")
        }
        return result
    }
    
    var path: String {
        return path(locale: nil)
    }
    
    func path(locale: Locale?) -> String {
        return url(locale: locale).path
    }
}

private final class BundleToken {
    static let bundle: Bundle = {
#if SWIFT_PACKAGE
        return Bundle.module
#else
        return Bundle(for: BundleToken.self)
#endif
    }()
}
