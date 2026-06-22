# start-server.ps1
# Simple static HTTP server for Windows PowerShell

$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Output "PowerShell Web Server started on http://localhost:$port/"
    Write-Output "Press Ctrl+C to stop the server."
    $basePath = Resolve-Path $PSScriptRoot
    
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/") { $urlPath = "/index.html" }
        
        # Decode URL path (e.g. %20 -> space)
        $urlPath = [System.Uri]::UnescapeDataString($urlPath)
        $filePath = Join-Path $basePath $urlPath
        
        Write-Output "Request: $($request.HttpMethod) $($request.Url.PathAndQuery)"
        
        if (Test-Path $filePath -PathType Leaf) {
            try {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                
                # Determine content type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = "text/html; charset=utf-8"
                switch ($ext) {
                    ".css"  { $contentType = "text/css" }
                    ".js"   { $contentType = "application/javascript" }
                    ".png"  { $contentType = "image/png" }
                    ".jpg"  { $contentType = "image/jpeg" }
                    ".jpeg" { $contentType = "image/jpeg" }
                    ".gif"  { $contentType = "image/gif" }
                    ".svg"  { $contentType = "image/svg+xml" }
                    ".ico"  { $contentType = "image/x-icon" }
                    ".webp" { $contentType = "image/webp" }
                }
                
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $response.StatusCode = 500
                $errMsg = "500 Internal Server Error: $_"
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errMsg)
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $errBytes.Length
                $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
            }
        } else {
            $response.StatusCode = 404
            $errMsg = "404 Not Found: $urlPath"
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errMsg)
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }
        
        $response.Close()
    }
} catch {
    Write-Output "Server stopped or error occurred: $_"
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
