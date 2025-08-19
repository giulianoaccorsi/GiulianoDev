import SwiftUI

typealias AssetColorTypeAlias = ColorAsset.Color

extension ColorAsset {
  static let test = ColorAsset(name: "Test")
  static let accent = ColorAsset(name: "accent")
  enum Background {
    static let primary = ColorAsset(name: "background/primary")
    static let secondary = ColorAsset(name: "background/secondary")
  }
  enum Border {
    static let primary = ColorAsset(name: "border/primary")
  }
  enum Text {
    static let primary = ColorAsset(name: "text/primary")
  }
}

struct ColorAsset: Sendable, Hashable {
  fileprivate(set) var name: String
    
  typealias Color = NSColor
    
  var color: Color {
    guard let color = Color(asset: self) else {
      fatalError("Unable to load color asset named \(name).")
    }
    return color
  }

  var swiftUIColor: SwiftUI.Color {
    SwiftUI.Color(asset: self)
  }

  fileprivate init(name: String) {
    self.name = name
  }
}

extension ColorAsset.Color {
  convenience init?(asset: ColorAsset) {
    let bundle = BundleToken.bundle
      self.init(named: NSColor.Name(asset.name), bundle: bundle)
  }
}

extension SwiftUI.Color {
  init(asset: ColorAsset) {
    let bundle = BundleToken.bundle
    self.init(asset.name, bundle: bundle)
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
