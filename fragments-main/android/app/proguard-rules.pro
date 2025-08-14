# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Keep line number information for debugging stack traces.
-keepattributes SourceFile,LineNumberTable

# Rename source file for security
-renamesourcefileattribute SourceFile

# Keep Capacitor classes
-keep class com.getcapacitor.** { *; }
-keep class com.capacitorjs.plugins.** { *; }

# Keep React Native/JavaScript interface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep WebView JavaScript interfaces
-keepclassmembers class fqcn.of.javascript.interface.for.webview {
   public *;
}

# AdMob rules
-keep class com.google.android.gms.ads.** { *; }
-keep class com.google.ads.** { *; }

# Capacitor plugins
-keep class * extends com.getcapacitor.Plugin
