var strings = ["self", "top", "0px", "getTime", "kee", "autoPlay", "constant", "standard", "mini", "data:image/png;base64,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", "data:audio/mp3;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq", "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAABQCAMAAACkuKloAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQua/w2Z/wya/w6c/xCb/xGc/xKe/xSc/xWe/xie/xyf/xeg/xqg/x2g/x6i/yCh/yGi/yKk/ySj/yWk/yam/yik/ymm/yym/yqo/y2o/y+q/zCo/zKq/zSp/zWq/zas/zir/zmt/jms/zqu/zyt/jyt/z6u/j2u/z6w/0Cu/0Gw/0Ky/0Wx/kSw/0Wy/0e0/0iy/0q0/kq0/0u2/0yz/060/k20/062/1C1/1G2/lG2/1S2/lS3/1K4/lK4/1a4/lW4/1a6/1i5/li4/1m6/lm6/1u8/lq8/127/ly6/128/l28/1++/2G8/mC8/2K+/mK+/2S9/2W+/mW+/2m//mi//2bA/mbA/2rA/mnA/2vC/mrC/2zB/mzB/23C/m3C/2/E/m7E/3DD/nDC/3LE/nHE/3LG/3TF/nTE/3XG/nXG/3fI/3nG/njG/3zH/3rI/nnI/33I/n3I/3/K/n/K/4DJ/oDJ/4HK/oHK/4PM/4TL/oTL/4XM/obM/4jN/ojM/4rO/orO/4zO/o3O/47Q/o7Q/5DP/5HQ/pHQ/5LS/pLS/5TR/pTR/5XS/pXS/5bU/pbU/5jT/5nU/pnU/5zV/5zW/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqGwnoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjE51NayZAAAIDRJREFUeF6VnPt/VNd1xVUMsUl4ipcJGFxcysMBEzVGQKksIqgtZAiBYqEqQsWAwZTGgTqADRgsIBAKMjLu/9v12PucM6PBTpfua2bED/p+1n6de4e+P/1XT/HtP8VnOHHT7mvrCrYrV7iHLufh8uWLVy5f7NL58+fOT5+brpqanpyenjx75/n3P/zww0vq+/uXxsdPYZNOnDhxHNtxbGOp0bGxI0c+PGKNjBwaOTRsDR08YO07sG9w715se/cODAzswQbttnbt3rVr586dO7Dt2LEt9M4Wa/OWzZs2b5I2Qhs2bFgvrVv35lppzapVq1Zj71+5sg9/O/5wHAykMElmeVE+EC6x4r/zgRIzEgOzi5cvfwZwvEqdBzYItLiLGbaJM19//8NLQjO3l9/PnDUzQPs9gYHcx2NjBjc6Osp9NKkFMWho+MCB4DY4OGhowgZue/a8t1vcdu1+F8ysAm3bO5CxBTUyI7QN681t3ZvGtmY1uUEr+1f0BTSxkK78p08kRVaFl/BoFyrDAhvi4UmXMBl+Cq7zOljwWtXU9PTExOTUhcf/m05LPb9Ks8FpAEZux49/3LgtiFGHDo0UcENDQwFtL6iZmajJa3Tbrl3Yd+7atYtWg9m2bRe0rVuFDNr8towmbBv4k9TEbO3a1WtlNah/BdwmCjoaiaEkFX/Il/EL/i1e0F8C5di0zYiMbuMhqZFb0Go0NT01cel59VnR9zdPnXCAkhlkYJ1OQ4AGMTCj0xLbgX2mZq8RW4Qn49MRih8h27YVVttir22G1zbRbWTGfb1jdN26dQFuzSr+QCvpNgEolKRKEOfLPAre5fZ3rPSY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", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAAPHSURBVGhD7dpZqFVVAMbx22BiZqRZWUKY0IASPYSRODQQSiRBaNgg5EDRAIFBoPiQFviSQQmiCGrggyBUFAoJhg9iFAhhYKFGGBKaWkRpaVr0/w7sy+bcb8/rnLv34Xzwe1tr77XOsPeaBvrpp+O5CjPwHGbjavR8HsFR/BdzHE+gZ/M0/kG805HLWIKey734C67TkYt4ED2TK3AArrPtvkXP/Oefh+tkktfQ+IzGCbgOJjmDcWh03oHrXJb1aGwmIeuBlkRP/6loZHbCdSqvPWhcHoLrTFFPojHRkPQbuI4UpVHeSDQiL8F1oqw3UfvcgF/gOlDW75iAWuc9uMbH/Q09uLZiN87BlYvbgtrmbmi87Roe2YeJiOcmfAZXPqJJzP2oZfTtuUZHvoNGci4j8DVcvch+aNxfqzwO19g4LTykJc81nkVtom/re7iGxt2CtIyCftKubuQnXItaZDlcI9upY1m5AFc3bjWGPXow/QbXwHb3IC03w9Vrdx63Y1izCa5xznykZRZcPWcHhi334RJcw5ysn+jLcPWcf6EPaliid7JrVJKPkRbNwV29JAdxJbqaBXCNSXMMafkCrl6aZeha9HT+Ea4hafSqug5JOQVXL81JXI+uZBVcI/J4AC43wpXP4110PBpn/wnXgDyWwmUmXPk89O6/Ex3Ndrib55X07bwIVz4vTXI6Fu1y6DXibpzXLrisgytfxFwEj14bX8HdsAgtJbl8Cle+iMPQvCFoXoC7WVGar7stIjXalS/qdQTLGPwMd6MyJiMe/ZrKrr+3+xXjESRr4W5S1sOIR+tprlxZG1A5+na0RuZuUNYixDMNrlxZmj9oW7pSPoK7eBUa478f8wlcuSr2onQehbtoUzyFwtGT9xDcBZviBxTehXkF7mJVaQC0DToEpGGmTj1tRJF5fRErkTtjcRruQlVodrYQLjr1lLUmX8YfuBW5ogeOu0hVHyAtb8PVq+pDZGYKko5kVZW10a+Zn6tXlf5eSdPhwXwOVzmEPA+a0GOGyJdI3IWZB1cplNuQFq3OVJ39pWkfOLVyDY7AVQgl6xiXGubqhaLTV0P27t6AKxzSWdwFF20QhJwIJVmDwejb1qKdKxiaXpOLEW0n6X//DLrRadEhg8EFzzy7lKHpna3O5tkrC00fdCtvwRXoVTq10UqI9a4m2YxWXoUr0KtWoBVt2FdZK28SDZDuwGD0h+/UULUuNEnS+v2QTIc27rKOYzSNRoM6ONS+1jckOuXwGHTQRqOpptJhozmo/eHAfvrpp59AGRj4H6lAyP+Ua43tAAAAAElFTkSuQmCC", "messages", "Enter text from image", "loading", "reloading...", "validating...", "Challenge expired, please start again", "Challenge expired, click to refresh", "Please complete the challenge", "Characters missing, please complete...", "Click to play audio challenge", "Playing audio...", "Click to continue audio playback", "Click to download the audio challenge", "Failed to reach web service, Please check your internet connection and try again", "Get new challenge", "Privacy", "Terms", "Powered by MTCaptcha&trade;", "Entrer le texte de l'image", "chargement", "Veuillez réessayer..", "Défi expiré, veuillez recommencer", "S'il vous plaît compléter le défi", "Cliquez pour jouer au défi audio", "Cliquez pour télécharger le défi audio", "Téléchargement audio ...", "Échec de l'accès au service Web. Vérifiez votre connexion Internet et réessayez.", "Obtenir un nouveau défi", "Confidentialité", "Conditions", "Ingrese el texto de la imagen", "cargando", "recargando ...", "validando ...", "Inténtalo de nuevo..", "Verificado con éxito", "Desafío expirado, haga clic para actualizar", "El desafío expiró, por favor comience nuevamente", "Faltan caracteres, por favor complete ...", "Haz clic para reproducir el desafío de audio", "Reproduciendo audio ...", "Haga clic para continuar la reproducción de audio.", "Haga clic para descargar el desafío de audio", "Descargando audio ...", "Consigue un nuevo desafío", "Condiciones", "Desarrollado por MTCaptcha&trade;", "Inserisci il testo dall'immagine", "Caricamento in corso", "ricaricare ...", "Per favore riprova ..", "Sfida scaduta, fai clic per aggiornare", "Sfida scaduta, ricominciare", "Per favore completa la sfida", "Fare clic per continuare la riproduzione audio", "Fai clic per scaricare la sfida audio", "Download audio ...", "Impossibile raggiungere il servizio Web. Verifica la connessione a Internet e riprova", "Ottieni una nuova sfida", "vita privata", "輸入圖片文字", "證實...", "請再試一次..", "已成功驗證", "挑戰已過期，請單擊刷新", "挑戰已過期，請重新開始", "缺少字符，請填寫...", "點擊播放音頻挑戰", "正在下載音頻...", "無法訪問網絡服務，請檢查您的互聯網連接，然後重試", "由MTCaptcha&trade;提供支持", "正在重新加載...", "播放音頻...", "點擊下載音頻挑戰", "迎接新挑戰", "正在重新加载...", "证实...", "请再试一次..", "已成功验证", "挑战已过期，请重新开始", "请完成挑战", "缺少字符，请填写...", "点击播放音频挑战", "播放音频...", "单击以继续播放音频", "正在下载音频...", "无法访问网络服务，请检查您的互联网连接，然后重试", "迎接新挑战", "输入图片文字", "挑战已过期，请单击刷新", "点击下载音频挑战", "bezig met laden", "herladen ...", "valideren ...", "Succesvol geverifieerd", "De uitdaging is verlopen, begin opnieuw", "Klik om audio-uitdaging te spelen", "Audio afspelen ...", "Klik om door te gaan met afspelen van audio", "Klik om de audio-uitdaging te downloaden", "Kan webservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw", "Krijg nieuwe uitdaging", "Voorwaarden", "Wird geladen", "validieren ...", "Erfolgreich verifiziert", "Herausforderung abgelaufen, bitte neu starten", "Bitte vervollständige die Herausforderung", "Klicken Sie hier, um die Audio-Challenge abzuspielen", "Audio abspielen ...", "Klicken Sie, um die Audiowiedergabe fortzusetzen", "Klicken Sie hier, um die Audio-Challenge herunterzuladen", "Webdienst konnte nicht erreicht werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut", "Holen Sie sich neue Herausforderung", "Privatsphäre", "Unterstützt von MTCaptcha&trade;", "captcha", "Verified Successfully", "Downloading audio...", "Failed to connect to the internet, Please try again", "MTCaptcha&trade;", "rechargement ...", "Le défi a expiré, veuillez recommencer", "Le défi a expiré, cliquez pour rafraîchir", "Caractères manquants, veuillez compléter ...", "Cliquez pour lire le défi audio", "Lecture audio ...", "Cliquez pour continuer la lecture audio", "Impossible d&#39;accéder au service Web, veuillez vérifier votre connexion Internet et réessayer", "Obtenez un nouveau défi", "Por favor completa el desafío", "No se pudo acceder al servicio web. Comprueba tu conexión a Internet y vuelve a intentarlo.", "No se pudo conectar a Internet. Vuelve a intentarlo.", "Intimidad", "MTCaptcha ™", "convalidare ...", "Caratteri mancanti, per favore completa ...", "Riproduzione audio ...", "condizioni", "Inserisci il testo dall&#39;immagine", "驗證碼", "請再試一遍..", "請完成挑戰", "單擊以繼續播放音頻", "無法連接到互聯網，請重試", "MTCaptcha™", "輸入圖片中的文字", "验证码", "无法连接到互联网，请重试", "输入图片中的文字", "Probeer het opnieuw ..", "Uitdaging verlopen, klik om te vernieuwen", "Voltooi de uitdaging", "Audio downloaden ...", "Kan geen verbinding maken met internet. Probeer het opnieuw", "Neuladen...", "Bitte versuche es erneut..", "Herausforderung abgelaufen, zum Aktualisieren klicken", "Zeichen fehlen, bitte ausfüllen ...", "Audio wird heruntergeladen ...", "Verbindung zum Internet fehlgeschlagen. Bitte versuchen Sie es erneut", "Nutzungsbedingungen", "Geben Sie den Text aus dem Bild ein", "M T Captcha privacy policy.", "M T Captcha terms and conditions.", "Powered by M T Captcha trademark", "captcha audio, click to play or pause.", "captcha image.", "enter text from captcha to verify you are not a bot. use comma key to play or pause captcha audio, use question mark key to get new captcha challenge.", "audio downloading.", "loading new captcha.", "new captcha loaded.", "characters missing, please complete.", "captcha verifying.", "verification failed.", "captcha verified successfully.", "verification timed out click to do captcha again.", "Termes et conditions M T Captcha.", "Propulsé par M T Captcha Trademark", "entrez le texte de captcha pour vérifier que vous n'êtes pas un bot. utilisez la touche virgule pour lire ou mettre en pause l'audio captcha, utilisez la touche point d'interrogation pour obtenir un nouveau défi Captcha.", "obtenir un nouveau défi captcha.", "téléchargement audio.", "chargement du nouveau captcha.", "nouveau captcha chargé.", "caractères manquants, veuillez compléter.", "captcha vérifiant.", "échec de la vérification.", "captcha vérifié avec succès.", "la vérification a expiré, cliquez pour refaire captcha.", "Política de privacidad de M T Captcha.", "Términos y condiciones de M T Captcha.", "captcha de audio, haga clic para reproducir o pausar.", "imagen CAPTCHA.", "Ingresa el texto de captcha para verificar que no eres un bot. use la tecla de coma para reproducir o pausar el audio captcha, use la tecla de signo de interrogación para obtener el nuevo desafío de captcha.", "Consigue nuevo reto captcha.", "Descarga de audio.", "Cargando nuevo captcha.", "nuevo captcha cargado.", "caracteres que faltan, por favor complete", "Verificación de captcha.", "Fallo en la verificación.", "Captcha verificado con éxito.", "verificación agotada en el tiempo haga clic para hacer captcha de nuevo.", "Termini e condizioni M T Captcha.", "Alimentato dal marchio M T Captcha", "captcha audio, fare clic per riprodurre o mettere in pausa.", "inserisci il testo da captcha per verificare che non sei un bot. usa il tasto virgola per riprodurre o mettere in pausa l'audio captcha, usa il tasto punto interrogativo per ottenere una nuova sfida captcha.", "ottieni una nuova sfida captcha.", "download audio.", "caricamento nuovo captcha.", "nuovo captcha caricato.", "caratteri mancanti, per favore completa.", "captcha verifica.", "verifica fallita.", "captcha verificato con successo.", "verifica scaduta per fare di nuovo captcha.", "M T Captcha隱私政策。", "由M T Captcha商標提供支持", "驗證碼音頻，點擊播放或暫停。", "從驗證碼輸入文本以驗證您不是機器人。使用逗號鍵播放或暫停驗證碼音頻，使用問號鍵獲取新的驗證碼挑戰。", "音頻下載。", "加載新的驗證碼。", "新的驗證碼已加載。", "字符缺失，請完成。", "驗證碼驗證。", "驗證失敗。", "驗證碼驗證成功。", "驗證超時點擊再次執行驗證碼。", "M T Captcha條款和條件。", "验证码音频，点击播放或暂停。", "音频下载。", "加载新的验证码。", "新的验证码已加载。", "验证码验证。", "验证失败。", "验证码验证成功。", "验证超时点击再次执行验证码。", "M T Captcha隐私政策。", "M T Captcha条款和条件。", "由M T Captcha商标提供支持", "验证码图像。", "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。", "获得新的验证码挑战。", "字符缺失，请完成。", "M T Captcha privacybeleid.", "M T Captcha algemene voorwaarden.", "Mogelijk gemaakt door M T Captcha Handelsmerk", "captcha-audio, klik om af te spelen of te pauzeren.", "captcha afbeelding.", "voer de tekst van captcha in om te verifiëren dat je geen bot bent. gebruik de komma-toets om captcha-audio af te spelen of te pauzeren, gebruik de vraagtekentoets om een nieuwe captcha-uitdaging te krijgen.", "krijg nieuwe Captcha-uitdaging.", "audio downloaden.", "nieuwe captcha laden.", "nieuwe captcha geladen.", "tekens ontbreken, vul alsjeblieft in.", "captcha-verificatie.", "verificatie mislukt.", "captcha is geverifieerd.", "verificatie timed out klik om opnieuw captcha te doen.", "M T Captcha Datenschutzerklärung.", "Allgemeine Geschäftsbedingungen von M T Captcha.", "Powered by M T Captcha Trademark", "Captcha-Audio, klicken Sie zum Abspielen oder Anhalten.", "CAPTCHA Bild.", "Geben Sie Text aus dem Captcha ein, um sicherzustellen, dass Sie kein Bot sind. Verwenden Sie die Kommataste, um Captcha-Audio abzuspielen oder anzuhalten. Verwenden Sie die Fragezeichen-Taste, um eine neue Captcha-Abfrage zu erhalten.", "lade neues captcha.", "Neues Captcha geladen.", "Zeichen fehlen, bitte ausfüllen.", "Verifizierung fehlgeschlagen.", "captcha erfolgreich verifiziert.", "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen.", "reduce", "keys", "forEach", "undefined", "lang", "miniLang", "aria", "addEventListener", "attachEvent", "now", "getElementsByClassName", "indexOf", "length", "querySelectorAll", "className", "call", "prototype", "push", "util", "miniFormWidth", "miniFormHeight", "enforceMinMax", "maxMiniHeight", "minMiniWidth", "maxMiniWidth", "config", "miniDefaults", "maxCaptchaWidth", "audioControl", "scrollWidth", "floor", "setCSSLeftTopWidthHeight", "main", "card", "inputbox", "imageContainer", "stsBox", "msgContainer", "widgetHeight", "medium", "style", "fontSize", "slice", "border", "offsetWidth", "clientWidth", "number", "left", "width", "height", "minCaptchaWidth", "assign", "boolean", "object", "string", "toString", "[object Array]", "widgetInstance", "inputText", "anslen", "value", "getAttribute", "sCode", "status", "code", "general", "CAP_EXPIRED", "isVerifying", "placeholder", "getBoundingClientRect", "pageXOffset", "documentElement", "scrollLeft", "pageYOffset", "scrollTop", "scrollHeight", "getFixPositionOfDom", "widgetHeightChange", "offsetHeight", "clientHeight", "errCard", "imageonly", "src", "asserts", "audio", "testAudio", "getElementsByTagName", "body", "appendChild", "getElementById", "paused", "removeChild", "exec", "ie8", "ie9", "round", "rgb(", "split", "getRGBAtoRGB", "rgba(", "parse", "location", "href", "replace", "stringify", "function", "return (", "api", "request", "getAPIURL", "substring", "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", "random", "-webkit-animation", "-moz-animation", "-o-animation", "animation", "clearAnimation", "widgetSize", "mtcap-main-", "counter", "widgetheightchange", "Captcha rendered", "prevStatusMsg", "langTxt", "audioPlay", "audioPlaying", "mtcap-ripple-", "doAnimation", "mt-ripple-kf 0.6s linear", "internal", "CAPTCHA_LOADED", "updateAriaMessage", "default", "privacyLink", "termsLink", "ariaTxt", "ariaAudio", "image", "ariaInput", "ariaStatus", "statusButton", "AUDIO_DOWNLOADING", "AUDIO_PLAYING", "LOADING_NEW", "RELOADING_NEW", "loadingNew", "CAPTCHA_NEWLY_LOADED", "ariaCaptchaStatus", "captchaNewlyLoaded", "CAPTCHA_SOLUTION_INCOMPLETE", "challengeIncomplete", "VALIDATION_FAILED", "validationFailed", "VALIDATION_SUCCESS", "validationSuccess", "inputTextForm", "TOKEN_TIMEOUT", "tokenTimeOut", "audioButton", "ERROR", "noCssImage", "setAttribute", "aria-label", "events", "update", "color", "audiofocus", "maxWidth", "toggleImg", "challengeType", "iconColors", "miniIconColors", "widget", "audioContainer", "pause", "showIncomplete", "showStatusMsg", "verifying", "rotateImg", "verifySuccess", "disable", "blur", "userReset", "widgetEnabled", "display", "stsBtn", "position", "absolute", "theme", "#F5F5F5", "getColor", "#F8F8F8", "#444444", "#999999", "#777777", "white", "3px solid #DDCCAA", "#AA9988", "#333333", "#393C44", "0,0,0,0.07", "#DDDDDD", "#BBBBBB", "#222222", "255,255,255,0.1", "#55CAF1", "#33383B", "#90060B", "#773333", "#65DAF1", "#FFBBBB", "#E7362B", "#ff5555", "#9EA1A0", "#F87800", "#F89300", "#F07000", "#C8E8F1", "0,0,0,0.13", "#9B9CA2", "#7B7C82", "#3B3C42", "#F0F7F7", "#D1C9CA", "#767676", "245,255,255,0.6", "#000000", "#335500", "-15deg,#FCFCFC, #FCFCFC 27%, #C0C0C0", "#555555", "#404040", "#FF0000", "0,0,0,0.3", "miniTheme", "1px solid #DDDDDD", "#26A0DA", "1px solid #E0E0E0", "#F74E39", "#E0E0E0", "#B8B8B8", "#DDCCAA", "#757575", "#FF7500", "#41454E", "#BABABA", "#FFFFFF", "#AD2920", "#3A4044", "1px solid #F89300", "1px solid #9B9CA2", "#FF3200", "#35AAD1", "1px solid #888888", "0,0,0,0.16", "0,0,0,0.12", "#888888", "'Verdana', 'Arial', 'Helvetica', 'sans-serif'", "#00EE00", "isObject", "customStyle", "isString", "test", "warn", "log", "Maximum allowed customStyle value is 90 characters", "isBolean", "defaults", "Entered invalid characters in customStyle", "basic", "overlayConf", "hasOwnProperty", "set", "showCard", "setShowCard", "setCardColor", "setAudioControlColor", "cardShadowColor", "setCardShadowColor", "cardBorder", "setCardBorder", "inputTextColor", "setInputTextColor", "setPlaceHolderColor", "msgTextColor", "invalidMsgTextColor", "msgTextFont", "msg", "inputBackgroundColor", "setInputBorderColor", "buttonIconColor", "setButtonIconColors", "setCardBorderRadius", "createElement", "styleSheet", "cssText", "head", "refresh", "verify", "success", "fail", "setAudioCtrlIconColor", "borderRightColor", "byDefault", ";}  ", ".mtcap-inputborder-custom:focus{border-color:", ".mtcap-inputborder-custom:focus-within{border-color:", "active", ".mtcap-inputborder-custom:hover:active,mtcap-inputborder-custom:focus:active{border-color:", "backgroundColor", "fontFamily", ".mtcap-inputtext-custom{font-family:", "addToStyleSheet", ".mtcap-msg-custom{color:", "a.mtcap-msglink-custom:link,a.mtcap-msglink-custom:visited,a.mtcap-msglink-custom:hover,a.mtcap-msglink-custom:active{color:", ".mtcap-invalidmsg-custom{color:", ".mtcap-inputtext-custom{color:", "; }  ", ".mtcap-inputtext-custom::-ms-input-placeholder{ color:", ".mtcap-inputtext-custom:-ms-input-placeholder{  color:", "false", "5px", "boxShadow", "0 2px 2px 0 ", ",0 0 0 1px", "none", "audioControlBG", "match", "toLowerCase", "miniMaxBorderWidth", "The maximum bordered pixel value for mini is 5px", "miniMinBorderWidth", "The minimum bordered pixel value for mini is 1px", "px ", "Entered invalid characters in container border for Modern Mini", "borderColor", "0px none", "linear-gradient(", "background", "borderRadius", "cardBorderRadius", "borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "customLangText", "Maximum allowed customLangText value is 90 characters", "Entered invalid characters in customLangText", "privacy", "terms", "null", "host", "hostname", "&lt;", "&gt;", "Entered the invalid string for ", "Entered the invalid number for ", "true", "Entered the invalid boolean value for ", "sitekey", "Entered invalid characters in sitekey", "enableTestMode", "Entered invalid characters in enableTestMode", "Entered invalid characters in theme", "Entered characters in theme exceeds maximum allowed characters limit of 30", "Entered theme is not a valid theme", "Entered invalid characters in challengeType", "Entered characters in challengeType exceeds maximum allowed characters limit of 120", "Challenge type can only be `imageonly`", "autoFadeOuterText", "Entered characters in autoFadeOuterText exceeds maximum allowed characters limit of 5", "autoFadeOuterText can either only be true or false", "action", "Entered characters in action exceeds maximum allowed characters limit of 30", "Entered lang is not valid", "textLength", "Entered invalid characters in textLength", "Entered invalid values in textLength", "lowFrictionInvisible", "force-visible", "testmode_lowFrictionInvisible", "Entered invalid characters in testmode_lowFrictionInvisible", "testmode_lowFrictionInvisible can only be either 'force-visible' or 'force-invisible'", "No test key is set via enableTestMode parameter which is required to use testmode_lowFrictionInvisible feature", "Entered characters for miniFormWidth should only be of numbers, within a range of 265 - 600", "defaultMiniConfig", "Entered characters for miniFormHeight should only be of numbers, within a range of 42 - 55", "minMiniHeight", "Entered Height Value should be in range of 42 - 55", "error", "Missing Required Parameter: sitekey", "Sitekey Provided is Invalid", "trim", "getObject", "eventinfo", "validateCustomLangConf", "validateCustomCSSConf", "getConfigSummaryString", "mtv1ConfSum=", "v:01", "wdsz:min", "thm:", "lan:", "chlg:std", "chlg:img", "chlg:OTH", "clan:1", "cstyl:1", "autoFormValidate", "afv:", "render", "auto", "rnd:aut", "explicit", "rnd:exp", "waitForDom", "wfd:", "...", "postMessage", "jsBuildVersion", "2024-11-14.21.50.58", "cookie", "jsV=", "; path=/;secure;SameSite=None;Partitioned;", "Verified", "Not Verified", "Verifying", "Verified Token Expired", "Network/Connection Error", "ERROR for site owner: \n Invalid Sitekey \n (1410)", "ERROR for site owner: Sitekey Expired (1411)", "This website is not within the supported domains for this Sitekey", "ERROR for site owner: Invalid Testkey (1416)", "Error Occurred, Please try again.. (404)", "The IP or network you are on is temporarily blocked due to misuse, please try again later.  (429)", "Internal server error occurred, Please try again..  (500)", "Service unavailable, Please try again later... (503)", "Too Many Requests (429)", "Internal Server Error (500)", "Bad Request (400)", "Page Not Found (404)", "Service Unavailable (503)", "statusCode", "verifiedToken", "CAP_VERIFIED", "isVerified", "statusDesc", "isLowFriction", "isVisible", "internalStatus", "updateAriaMessageState", "updateUI", "CAP_LOADING", "showOrHideOuterText", "VERIFIYING_INPUT", "CAP_VERIFYING", "CAP_NOT_VERIFIED", "resetTimer", "reset", "verifystatuschange", "CAP_VERIFIED_TOKEN_EXPIRED", "parent", "eventEmitter", "renderDelayTimer", "Custom Config Received late.", "validateCustomConf", "doRender", "setStatus", "focus", "updateErrorCardHeight", "apply", "message", "IsJsonString", "data", "trigger", "event", "Error occurred - ", "hash", "add32", "cmn", "charCodeAt", "0123456789abcdef", "hex_chr", "hex", "md51", "QH(", "TH[", "md5", "reverseStr", "splitEvenOddStr", "hashStr", "join", "browser", "rot", "agi", "tne", "rand", "abs", "ath", "oor", "Date", "getTimezoneOffset", "gAr", "ent", "ooc", "rerr", "efer", "augn", "hardwareConcurrency", "^(?:https?://)?(?:[^@/\n]+@)?(?:www.)?([^:/\n]+)", "FoldChlg", "URLSafeBase4096IntToChar", "base4096", "TMs", "eik", "rval", "calcW1nfo", "URLSafeBase64CharCode2IntMap", "arg i must be between 0 .. 63 inclusive", "URLSafeBase64Int2CharMap", "arg i must be between 0 .. 4095 inclusive", "URLSafeBase64IntToChar", "URLSafeBase64CharToInt", "charAt", "foldBase64IntArray", "hashIntAry", "TAIL_KEEINT", "ciderb64int", "keehist", "keehistPos", "prevString", "cide", "rb6", "4int", "ehist", "ehis", "tPos", "Backspace", "getKey", "ehistP", "tKe", "eTS", "ini", "cksp", "ace", "rlK", "las", "| FirstKeyTimeSec: ", "confExtractorFrmURI", "serviceDomain", "constructURI", "logJSError", "AJAXRequest", "transactionSignature", "sessionID", "challengeToken", "callback", "ctCallback", "imageCallback", "stop", "activeElement", "incompleteSol", "generate", "hasFoldChlg", "foldChlg", "solve", "fseed", "fslots", "fdepth", "getKeesString", "waitChlg", "validateCallback", "preventDefault", "protocol", "/mtcv1/api/", "getchallenge.json", "getimage.json", "getaudio.json", "solvechallenge", "downloadAudio", "logJSError.json", "XMLHttpRequest", "open", "GET", "timeout", "readyState", "response", "responseText", "renderCaptcha", "showCaptcha", "handleHTTPLevelError", "CONNECTION_ERR", "networkFailed", "Network Connectivity Issues", "BAD_SITEKEY", "SITEKEY_EXPIRED", "DOMAIN_NOTMATCH", "BAD_TESTKEY", "RESTART_CAPTCHA_TRANSACTION", "RESTART_CAPTCHA_CHALLENGE_EXPIRED", "initialLoad", "getCT", "REQ_ERR", "BAD_CHALLENGETOKEN", "MISMATCH_CHALLENGETOKEN_DATA", "Something went wrong, Please try again...", "result", "msgs", "Something went wrong, Please try again... (", "http", "HTTP_ERROR", "httpErrorMessages", "HTTP_ERROR404", "TOO_MANY_REQUEST", "INTERNAL_SERVER_ERROR", "CONNECTION_TIMEOUT", "Error Occurred, Please try again...", "handleAPILevelError", "warnSysMsg", "challenge", "init", "captcahRenderedTime", "textChlg", "isDevMode", "context", "preRes", "isMTCLinksDisabled", "hideTerms", "isMTCPowByDisabled", "hidePowBy", "hasWaitChlg", "hasTextChlg", "convertTimeHexToNumber", "time", "setCTExpireTimer", "ctttl", "enableMouseFlow", "isMouseFlowEnabled", "_mfq", "script", "text/javascript", "//cdn.mouseflow.com/projects/IFRAME_MOUSE_FLOW_KEY.js", "rendered", "textlen", "img", "image64", "data:image/png;base64,", "fadein 1s ease-out", "backgroundImage", "url('data:image/png;base64,", "filter", "backgroundRepeat", "no-repeat", "backgroundSize", "enable", "canSolveChallenge", "isMouseWithinAudioContainer", "contains", "aud", "audio64", "data:audio/", "format", ";base64,", "challengeExpireTimer", "expire", "setSTExpireTimer", "verifyResult", "vtttl", "MTerr", "errCount", "logCount", "lastErr", "logErr", "onUnexpectedJSError", "storeLastError", "tryLogLastError", "info", "stack", "(nostack)", "timestamp", "querySelector", "html", "createMiniWidget", "getBorderOfCaptcha", "setUserInputWidgetSize", "mtcap-hidden", "innerHTML", "append", "div", "mtcap-card-", "ontouchstart", "mtcap-touchripple-container-", "mtcap-touchripple-container-mini", "mtcap-touchripple-canvas-mini", "mtcap-touchripple-canvas-", "ripple", "divTable mtcap-inputbox-mini mtcap-inputborder-mini mtcap-inputborder-custom", "mtcap-inputbox-", "mtcap-audioctrl-mini ", "mtcap-audioctrl-", "span", "desc4AudioButton-", "input", "mtcap-audioctrlicon-mini", "mtcap-audioctrlicon-", "button", "mtcap-audioctrlbg-mini", "mtcap-audioctrlbg-", "mtcap-audio-", "mtcap-show-if-nocss-mini", "desc4InputText-", "mtcap-noborder mtcap-inputtext-mini mtcap-inputtext-custom", "mtcap-inputtext-", "text", "inputPrompt", "off", "[a-zA-Z0-9]*", "mtcap-image-", "filter : hue-rotate(", "mtcap-image-nocss-", "noCSS", "mtcap-statusbox-wh-mini mtcap-inputborder-mini mtcap-inputborder-custom divTableRow", "mtcap-statusbox-", "mtcap-hidden-aria", "desc4StatusButton-", "mtcap-noborder mtcap-statusimg-mini", "fromCharCode", "mtcap-noborder mtcap-mozbutton mtcap-statusbutton-mini", "mtcap-statusbutton-", "mtcap-msg mtcap-msg-custom", "mtcap-msg-", "mtcap-msgbox-", "mtcap-msglink-powered-by-", "_blank", "miniByMT", "mtcap-msglink-privacy-", "mtcap-msglink-active mtcap-msglink-custom", "link", "mtcap-msglink-terms-", "https://www.mtcaptcha.com/legal-terms", "resize", "bind", "load", "addEvent", "inputKeyup", "mtcap-card error-card", "mtcap-legal-", "mtcap-msg mtcap-msg-custom mtcap-msg-legal-block ", "mtcap-msglink-active mtcap-msglink-custom ", "https://www.mtcaptcha.com/legal-privacy-captcha", "mtcap-msglink mtcap-msglink-custom ", "mtcap-ampersand-", " &amp; ", "mtcap-msg", "mtcap-card", "maxTouchPoints", "mtcap-ripple", "mtcap-audioctrl", "mtcap-show-if-nocss", "mtcap-audioctrlicon", "mtcap-audioctrlbg", "deg);", "divTable mtcap-inputbox", "divTableRow", "mtcap-inputborder mtcap-inputborder-custom mtcap-td-block", "border-right:0px", "mtcap-td-", "mtcap-tr-", "mtcap-noborder mtcap-inputtext mtcap-inputtext-custom", "mtcap-inputborder mtcap-inputborder-custom mtcap-statusbox-wh", "assertive", "desc4CaptchaStatus-", "mtcap-noborder mtcap-statusimg", "mtcap-statusimg-", "readonly", "mtcap-noborder mtcap-mozbutton mtcap-statusbutton", "mtcap-msgbox ", "mtcap-msglink-active mtcap-msglink-custom mtcap-poweredby-link", "mtcap-alert", "mtcap-alert-img", "mtcap-alert-img-", "alrtImg", "mtcap-alert-", "mtcap-alert-msg", "connectionError", "error-block", "error-code", "error-code-", "error-block-", "mtcap-alert-btn", "mtcap-alert-btn-", "mtcap-require-css-msg-", "alrtMsg", "alert", "alrtbtn", "mouseenter", "focusin", "touchend", "click", "focusout", "isAudioContinue", "audioTimer", "selectionStart", "selectionEnd", "removePlaceholderText", "autoReloadCnt", "enterTextMsg", "keydown", "inputKeyDown", "mousedown", "showStatusPressed", "mouseup", "isCaptchaFieldsDisabled", "stsImg", "mouseleave", "getInternalStatus", "captchaRefresh", "toggleStatusImg", "online", "keyCode", "isInputFieldDisabled", "which", "validateTimer", "removeEventListener", "toggleAudioCtrl", "showTouchRippleAtPos", "getAudio", "play", "setAttributes", "border: 0; position: absolute; opacity : 0; height : 0; font-size: 16px;", "duration", "ended", "continueAudio", "audioDownloading", "canPlayType", "clearRotateChars", "rotateChars", "rotateCharIntv", "rotateCharObj", "dom", "startTS", "intvMS", "doCharsRotate", "chars", "pos", "visibility", "visible", "hidden", "isShowingRequired", "#FF5151", "toggleMsg", "emptyCaptcha", "prevStatusPressed", "scale(0.8)", "transform", "msgNo", "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-powered-by-", "'aria-label='", "poweredByLink", "'href=\"https://www.mtcaptcha.com\" target=\"_blank\" tabindex=\"0\">", "</a>", "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-privacy-", "' aria-label='", "'href=\"https://www.mtcaptcha.com/legal-privacy-captcha\" tabindex:\"0\" target=\"_blank\" role:\"link\">", "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-terms-", "' href=\"https://www.mtcaptcha.com\" target=\"_blank\" tabindex:\"0\">", "byMT", "<p>", "</p>", "<p class='mtcap-invalidmsg mtcap-invalidmsg-custom' id='mtcap-invalid-msg-", "'  aria-invalid='true' tabindex='0'>", "rotate 650ms linear infinite", "tabIndex", "aria-hidden", "fadein 350ms ease", "removeAttribute", "verifyexpired", "verifyFail", "errorCode", "(Error ", "widgetWidth", "margin", "18px", "marginTop", "-4px", "miniError", "hideAudioCtrl", "showAudioCtrl", "0123456789ABCDEF", "canShowText", "mtcap-fadein 300ms forwards linear", "canHideText", "mtcap-fadeout 300ms forwards linear", "renderWidgetOnTimeout", "getIEVersion", "setConfigForSummary", "setInCookie", "num", "generateSessionGUID", "validateAndSetAction", "Couldn’t get Custom Config in time - Rendering with defaults", "resetProp", "successTokenExpireTimer", "completeTimer", "loaded", "validateConf", "isValidSitekey", "setObject", "iframeId", "lastIndexOf", "mtcap-main", "force-invisible", "custom", "doCustomRender"];
(function () {
    var constants = {
        asserts: {
            alrtImg: "data:image/png;base64,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",
            audio: "data:audio/mp3;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            ripple: "data:image/png;base64,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",
            noCSS: "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAABQCAMAAACkuKloAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQua/w2Z/wya/w6c/xCb/xGc/xKe/xSc/xWe/xie/xyf/xeg/xqg/x2g/x6i/yCh/yGi/yKk/ySj/yWk/yam/yik/ymm/yym/yqo/y2o/y+q/zCo/zKq/zSp/zWq/zas/zir/zmt/jms/zqu/zyt/jyt/z6u/j2u/z6w/0Cu/0Gw/0Ky/0Wx/kSw/0Wy/0e0/0iy/0q0/kq0/0u2/0yz/060/k20/062/1C1/1G2/lG2/1S2/lS3/1K4/lK4/1a4/lW4/1a6/1i5/li4/1m6/lm6/1u8/lq8/127/ly6/128/l28/1++/2G8/mC8/2K+/mK+/2S9/2W+/mW+/2m//mi//2bA/mbA/2rA/mnA/2vC/mrC/2zB/mzB/23C/m3C/2/E/m7E/3DD/nDC/3LE/nHE/3LG/3TF/nTE/3XG/nXG/3fI/3nG/njG/3zH/3rI/nnI/33I/n3I/3/K/n/K/4DJ/oDJ/4HK/oHK/4PM/4TL/oTL/4XM/obM/4jN/ojM/4rO/orO/4zO/o3O/47Q/o7Q/5DP/5HQ/pHQ/5LS/pLS/5TR/pTR/5XS/pXS/5bU/pbU/5jT/5nU/pnU/5zV/5zW/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqGwnoAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQBwYWludC5uZXQgNC4wLjE51NayZAAAIDRJREFUeF6VnPt/VNd1xVUMsUl4ipcJGFxcysMBEzVGQKksIqgtZAiBYqEqQsWAwZTGgTqADRgsIBAKMjLu/9v12PucM6PBTpfua2bED/p+1n6de4e+P/1XT/HtP8VnOHHT7mvrCrYrV7iHLufh8uWLVy5f7NL58+fOT5+brpqanpyenjx75/n3P/zww0vq+/uXxsdPYZNOnDhxHNtxbGOp0bGxI0c+PGKNjBwaOTRsDR08YO07sG9w715se/cODAzswQbttnbt3rVr586dO7Dt2LEt9M4Wa/OWzZs2b5I2Qhs2bFgvrVv35lppzapVq1Zj71+5sg9/O/5wHAykMElmeVE+EC6x4r/zgRIzEgOzi5cvfwZwvEqdBzYItLiLGbaJM19//8NLQjO3l9/PnDUzQPs9gYHcx2NjBjc6Osp9NKkFMWho+MCB4DY4OGhowgZue/a8t1vcdu1+F8ysAm3bO5CxBTUyI7QN681t3ZvGtmY1uUEr+1f0BTSxkK78p08kRVaFl/BoFyrDAhvi4UmXMBl+Cq7zOljwWtXU9PTExOTUhcf/m05LPb9Ks8FpAEZux49/3LgtiFGHDo0UcENDQwFtL6iZmajJa3Tbrl3Yd+7atYtWg9m2bRe0rVuFDNr8towmbBv4k9TEbO3a1WtlNah/BdwmCjoaiaEkFX/Il/EL/i1e0F8C5di0zYiMbuMhqZFb0Go0NT01cel59VnR9zdPnXCAkhlkYJ1OQ4AGMTCj0xLbgX2mZq8RW4Qn49MRih8h27YVVttir22G1zbRbWTGfb1jdN26dQFuzSr+QCvpNgEolKRKEOfLPAre5fZ3rPSY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",
            error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAAPHSURBVGhD7dpZqFVVAMbx22BiZqRZWUKY0IASPYSRODQQSiRBaNgg5EDRAIFBoPiQFviSQQmiCGrggyBUFAoJhg9iFAhhYKFGGBKaWkRpaVr0/w7sy+bcb8/rnLv34Xzwe1tr77XOsPeaBvrpp+O5CjPwHGbjavR8HsFR/BdzHE+gZ/M0/kG805HLWIKey734C67TkYt4ED2TK3AArrPtvkXP/Oefh+tkktfQ+IzGCbgOJjmDcWh03oHrXJb1aGwmIeuBlkRP/6loZHbCdSqvPWhcHoLrTFFPojHRkPQbuI4UpVHeSDQiL8F1oqw3UfvcgF/gOlDW75iAWuc9uMbH/Q09uLZiN87BlYvbgtrmbmi87Roe2YeJiOcmfAZXPqJJzP2oZfTtuUZHvoNGci4j8DVcvch+aNxfqzwO19g4LTykJc81nkVtom/re7iGxt2CtIyCftKubuQnXItaZDlcI9upY1m5AFc3bjWGPXow/QbXwHb3IC03w9Vrdx63Y1izCa5xznykZRZcPWcHhi334RJcw5ysn+jLcPWcf6EPaliid7JrVJKPkRbNwV29JAdxJbqaBXCNSXMMafkCrl6aZeha9HT+Ea4hafSqug5JOQVXL81JXI+uZBVcI/J4AC43wpXP4110PBpn/wnXgDyWwmUmXPk89O6/Ex3Ndrib55X07bwIVz4vTXI6Fu1y6DXibpzXLrisgytfxFwEj14bX8HdsAgtJbl8Cle+iMPQvCFoXoC7WVGar7stIjXalS/qdQTLGPwMd6MyJiMe/ZrKrr+3+xXjESRr4W5S1sOIR+tprlxZG1A5+na0RuZuUNYixDMNrlxZmj9oW7pSPoK7eBUa478f8wlcuSr2onQehbtoUzyFwtGT9xDcBZviBxTehXkF7mJVaQC0DToEpGGmTj1tRJF5fRErkTtjcRruQlVodrYQLjr1lLUmX8YfuBW5ogeOu0hVHyAtb8PVq+pDZGYKko5kVZW10a+Zn6tXlf5eSdPhwXwOVzmEPA+a0GOGyJdI3IWZB1cplNuQFq3OVJ39pWkfOLVyDY7AVQgl6xiXGubqhaLTV0P27t6AKxzSWdwFF20QhJwIJVmDwejb1qKdKxiaXpOLEW0n6X//DLrRadEhg8EFzzy7lKHpna3O5tkrC00fdCtvwRXoVTq10UqI9a4m2YxWXoUr0KtWoBVt2FdZK28SDZDuwGD0h+/UULUuNEnS+v2QTIc27rKOYzSNRoM6ONS+1jckOuXwGHTQRqOpptJhozmo/eHAfvrpp59AGRj4H6lAyP+Ua43tAAAAAElFTkSuQmCC"
        },
        log: {
            error: function (_0x23f986, _0xcc2760, _0x3cb0f8) {
                _0x23f986["sCode"] = _0x3cb0f8 || 400;
                constants["status"]["code"][_0x3cb0f8] = _0xcc2760;
                constants["postMessage"](_0x23f986, "error", {
                    msg: _0xcc2760
                });
            },
            warn: function (_0x1c42d3, _0x491213, _0x30db75) {
                _0x1c42d3["sCode"] = _0x30db75 || 2300;
                constants["status"]["code"][_0x30db75] = _0x491213;
                constants["postMessage"](_0x1c42d3, "warning", {
                    msg: _0x491213
                });
            }
        },
        postMessage: function (_0xedbfdb, _0x40468b, _0x3ee3af) {
            try {
                var _0x1c84c6 = JSON["stringify"]({
                    mtcap: 1,
                    widgetInstance: _0xedbfdb.widgetInstance,
                    event: _0x40468b,
                    eventinfo: _0x3ee3af,
                    status: constants["status"].getStatus(_0xedbfdb, _0x3ee3af["msg"])
                });
                window["parent"]["postMessage"](_0x1c84c6, _0xedbfdb.host);
            } catch (_0xeefaeb) {
                constants["log"]["warn"](_0xedbfdb, "Error occurred - " + _0xeefaeb);
            }
        },
        hash: {
            md5cycle: function (_0x20dfe8, _0x3ff5ec) {
                var _0x38f788 = _0x20dfe8[0];
                var _0x2d81c5 = _0x20dfe8[1];
                var _0x49f4bf = _0x20dfe8[2];
                var _0x13828c = _0x20dfe8[3];
                _0x38f788 = constants.hash.ff(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[0], 7, -680876936);
                _0x13828c = constants.hash.ff(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[1], 12, -389564586);
                _0x49f4bf = constants.hash.ff(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[2], 17, 606105819);
                _0x2d81c5 = constants.hash.ff(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[3], 22, -1044525330);
                _0x38f788 = constants.hash.ff(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[4], 7, -176418897);
                _0x13828c = constants.hash.ff(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[5], 12, 1200080426);
                _0x49f4bf = constants.hash.ff(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[6], 17, -1473231341);
                _0x2d81c5 = constants.hash.ff(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[7], 22, -45705983);
                _0x38f788 = constants.hash.ff(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[8], 7, 1770035416);
                _0x13828c = constants.hash.ff(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[9], 12, -1958414417);
                _0x49f4bf = constants.hash.ff(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[10], 17, -42063);
                _0x2d81c5 = constants.hash.ff(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[11], 22, -1990404162);
                _0x38f788 = constants.hash.ff(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[12], 7, 1804603682);
                _0x13828c = constants.hash.ff(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[13], 12, -40341101);
                _0x49f4bf = constants.hash.ff(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[14], 17, -1502002290);
                _0x2d81c5 = constants.hash.ff(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[15], 22, 1236535329);
                _0x38f788 = constants.hash.gg(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[1], 5, -165796510);
                _0x13828c = constants.hash.gg(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[6], 9, -1069501632);
                _0x49f4bf = constants.hash.gg(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[11], 14, 643717713);
                _0x2d81c5 = constants.hash.gg(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[0], 20, -373897302);
                _0x38f788 = constants.hash.gg(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[5], 5, -701558691);
                _0x13828c = constants.hash.gg(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[10], 9, 38016083);
                _0x49f4bf = constants.hash.gg(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[15], 14, -660478335);
                _0x2d81c5 = constants.hash.gg(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[4], 20, -405537848);
                _0x38f788 = constants.hash.gg(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[9], 5, 568446438);
                _0x13828c = constants.hash.gg(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[14], 9, -1019803690);
                _0x49f4bf = constants.hash.gg(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[3], 14, -187363961);
                _0x2d81c5 = constants.hash.gg(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[8], 20, 1163531501);
                _0x38f788 = constants.hash.gg(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[13], 5, -1444681467);
                _0x13828c = constants.hash.gg(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[2], 9, -51403784);
                _0x49f4bf = constants.hash.gg(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[7], 14, 1735328473);
                _0x2d81c5 = constants.hash.gg(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[12], 20, -1926607734);
                _0x38f788 = constants.hash.hh(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[5], 4, -378558);
                _0x13828c = constants.hash.hh(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[8], 11, -2022574463);
                _0x49f4bf = constants.hash.hh(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[11], 16, 1839030562);
                _0x2d81c5 = constants.hash.hh(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[14], 23, -35309556);
                _0x38f788 = constants.hash.hh(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[1], 4, -1530992060);
                _0x13828c = constants.hash.hh(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[4], 11, 1272893353);
                _0x49f4bf = constants.hash.hh(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[7], 16, -155497632);
                _0x2d81c5 = constants.hash.hh(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[10], 23, -1094730640);
                _0x38f788 = constants.hash.hh(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[13], 4, 681279174);
                _0x13828c = constants.hash.hh(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[0], 11, -358537222);
                _0x49f4bf = constants.hash.hh(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[3], 16, -722521979);
                _0x2d81c5 = constants.hash.hh(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[6], 23, 76029189);
                _0x38f788 = constants.hash.hh(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[9], 4, -640364487);
                _0x13828c = constants.hash.hh(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[12], 11, -421815835);
                _0x49f4bf = constants.hash.hh(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[15], 16, 530742520);
                _0x2d81c5 = constants.hash.hh(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[2], 23, -995338651);
                _0x38f788 = constants.hash.ii(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[0], 6, -198630844);
                _0x13828c = constants.hash.ii(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[7], 10, 1126891415);
                _0x49f4bf = constants.hash.ii(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[14], 15, -1416354905);
                _0x2d81c5 = constants.hash.ii(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[5], 21, -57434055);
                _0x38f788 = constants.hash.ii(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[12], 6, 1700485571);
                _0x13828c = constants.hash.ii(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[3], 10, -1894986606);
                _0x49f4bf = constants.hash.ii(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[10], 15, -1051523);
                _0x2d81c5 = constants.hash.ii(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[1], 21, -2054922799);
                _0x38f788 = constants.hash.ii(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[8], 6, 1873313359);
                _0x13828c = constants.hash.ii(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[15], 10, -30611744);
                _0x49f4bf = constants.hash.ii(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[6], 15, -1560198380);
                _0x2d81c5 = constants.hash.ii(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[13], 21, 1309151649);
                _0x38f788 = constants.hash.ii(_0x38f788, _0x2d81c5, _0x49f4bf, _0x13828c, _0x3ff5ec[4], 6, -145523070);
                _0x13828c = constants.hash.ii(_0x13828c, _0x38f788, _0x2d81c5, _0x49f4bf, _0x3ff5ec[11], 10, -1120210379);
                _0x49f4bf = constants.hash.ii(_0x49f4bf, _0x13828c, _0x38f788, _0x2d81c5, _0x3ff5ec[2], 15, 718787259);
                _0x2d81c5 = constants.hash.ii(_0x2d81c5, _0x49f4bf, _0x13828c, _0x38f788, _0x3ff5ec[9], 21, -343485551);
                _0x20dfe8[0] = constants.hash.add32(_0x38f788, _0x20dfe8[0]);
                _0x20dfe8[1] = constants.hash.add32(_0x2d81c5, _0x20dfe8[1]);
                _0x20dfe8[2] = constants.hash.add32(_0x49f4bf, _0x20dfe8[2]);
                _0x20dfe8[3] = constants.hash.add32(_0x13828c, _0x20dfe8[3]);
            },
            cmn: function (_0x502ec2, _0x267d55, _0x3afc5c, _0x558a26, _0xae1e67, _0x425838) {
                _0x267d55 = constants.hash.add32(constants.hash.add32(_0x267d55, _0x502ec2), constants.hash.add32(_0x558a26, _0x425838));
                return constants.hash.add32(_0x267d55 << _0xae1e67 | _0x267d55 >>> 32 - _0xae1e67, _0x3afc5c);
            },
            ff: function (_0x25ca38, _0x2c601f, _0x2c5961, _0x5a22e7, _0x2eef5b, _0x16ff76, _0x3ea79a) {
                return constants.hash.cmn(_0x2c601f & _0x2c5961 | ~_0x2c601f & _0x5a22e7, _0x25ca38, _0x2c601f, _0x2eef5b, _0x16ff76, _0x3ea79a);
            },
            gg: function (_0x1bd089, _0x3c10e5, _0xdd182f, _0x46250a, _0x2edf55, _0x5acdc6, _0xe60c20) {
                return constants.hash.cmn(_0x3c10e5 & _0x46250a | _0xdd182f & ~_0x46250a, _0x1bd089, _0x3c10e5, _0x2edf55, _0x5acdc6, _0xe60c20);
            },
            hh: function (_0x2e50cf, _0x31b4b6, _0x5da542, _0x25959c, _0x47009d, _0x211f53, _0xb99a60) {
                return constants.hash.cmn(_0x31b4b6 ^ _0x5da542 ^ _0x25959c, _0x2e50cf, _0x31b4b6, _0x47009d, _0x211f53, _0xb99a60);
            },
            ii: function (_0xe982a5, _0x18d7b4, _0x9583ba, _0x49f3c4, _0x5dd7ed, _0x2cdda1, _0x3f772c) {
                return constants.hash.cmn(_0x9583ba ^ (_0x18d7b4 | ~_0x49f3c4), _0xe982a5, _0x18d7b4, _0x5dd7ed, _0x2cdda1, _0x3f772c);
            },
            md51: function (_0x48a733) {
                var _0x2636ab = _0x48a733.length;
                var _0x46e3bd = [1732584193, -271733879, -1732584194, 271733878];
                var _0x487e6e;
                for (_0x487e6e = 64; _0x487e6e <= _0x48a733["length"]; _0x487e6e += 64) {
                    constants.hash.md5cycle(_0x46e3bd, constants.hash.md5blk(_0x48a733["substring"](_0x487e6e - 64, _0x487e6e)));
                }
                _0x48a733 = _0x48a733["substring"](_0x487e6e - 64);
                var _0x1d6127 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (_0x487e6e = 0; _0x487e6e < _0x48a733["length"]; _0x487e6e++) {
                    _0x1d6127[_0x487e6e >> 2] |= _0x48a733["charCodeAt"](_0x487e6e) << (_0x487e6e % 4 << 3);
                }
                _0x1d6127[_0x487e6e >> 2] |= 128 << (_0x487e6e % 4 << 3);
                if (_0x487e6e > 55) {
                    constants.hash.md5cycle(_0x46e3bd, _0x1d6127);
                    for (_0x487e6e = 0; _0x487e6e < 16; _0x487e6e++) {
                        _0x1d6127[_0x487e6e] = 0;
                    }
                }
                _0x1d6127[14] = _0x2636ab * 8;
                constants.hash.md5cycle(_0x46e3bd, _0x1d6127);
                return _0x46e3bd;
            },
            md5blk: function (_0x3ac55a) {
                var _0x260fb0 = [];
                var _0x2d2648;
                for (_0x2d2648 = 0; _0x2d2648 < 64; _0x2d2648 += 4) {
                    _0x260fb0[_0x2d2648 >> 2] = _0x3ac55a["charCodeAt"](_0x2d2648) + (_0x3ac55a["charCodeAt"](_0x2d2648 + 1) << 8) + (_0x3ac55a["charCodeAt"](_0x2d2648 + 2) << 16) + (_0x3ac55a.charCodeAt(_0x2d2648 + 3) << 24);
                }
                return _0x260fb0;
            },
            hex_chr: "0123456789abcdef".split(""),
            rhex: function (_0x26d28b) {
                var _0x53603d = "";
                var _0x55116f = 0;
                for (; _0x55116f < 4; _0x55116f++) {
                    _0x53603d += constants.hash["hex_chr"][_0x26d28b >> _0x55116f * 8 + 4 & 15] + constants.hash.hex_chr[_0x26d28b >> _0x55116f * 8 & 15];
                }
                return _0x53603d;
            },
            hex: function (_0xa086) {
                for (var _0x59eddc = 0; _0x59eddc < _0xa086["length"]; _0x59eddc++) {
                    _0xa086[_0x59eddc] = constants.hash.rhex(_0xa086[_0x59eddc]);
                }
                return _0xa086.join("");
            },
            md5: function (_0x527b3a) {
                return constants.hash["hex"](constants.hash["md51"](_0x527b3a));
            },
            add32: function (_0x5cbd31, _0x5f1952) {
                var _0x4efd7d = (_0x5cbd31 & 65535) + (_0x5f1952 & 65535);
                var _0x417202 = (_0x5cbd31 >> 16) + (_0x5f1952 >> 16) + (_0x4efd7d >> 16);
                return _0x417202 << 16 | _0x4efd7d & 65535;
            },
            generate: {
                automatedTestCode: function (ct, enableTestMode) {
                    var _0x20e0c7 = constants.hash.md5(enableTestMode + ct);
                    return "QH(" + _0x20e0c7["substring"](0, 8) + ")";
                },
                transactionSignature: function (_0x4990fd, _0x4cd178) {
                    return "TH[" + constants.hash["md5"](_0x4cd178 + _0x4990fd) + "]";
                },
                secureHash: function (_0x540443, _0x4eee45) {
                    if (!_0x540443 || !_0x4eee45) {
                        return 0;
                    }
                    var _0x439d12 = constants.hash;
                    var _0x4fc1dc = _0x540443["length"] > 64 ? _0x540443["substring"](0, 64) : _0x540443;
                    var _0x55d658 = _0x439d12["reverseStr"](_0x4eee45);
                    var _0x268d93 = _0x439d12["splitEvenOddStr"](_0x4eee45);
                    var _0x13bd23 = _0x439d12["splitEvenOddStr"](_0x55d658);
                    var _0x46c88f = _0x439d12["hashStr"](_0x4fc1dc + _0x268d93[0]);
                    var _0x509e16 = _0x439d12["hashStr"](_0x4fc1dc + _0x268d93[1]);
                    var _0x4250ed = _0x439d12.hashStr(_0x13bd23[0] + _0x4fc1dc);
                    var _0x5b1c5f = _0x439d12["hashStr"](_0x13bd23[1] + _0x4fc1dc);
                    var _0x2875c1 = _0x439d12["hashStr"](_0x4fc1dc + _0x4eee45);
                    var _0xaa220b = _0x439d12.hashStr(_0x439d12["reverseStr"](_0x4fc1dc) + _0x4eee45);
                    var _0x4dd7ee = _0x439d12["hashStr"](_0x4fc1dc + "|" + _0x46c88f + "|" + _0x509e16 + "|" + _0x4250ed + "|" + _0x5b1c5f + "|" + _0x2875c1 + "|" + _0xaa220b);
                    if (_0x4dd7ee === 0) {
                        _0x4dd7ee = 12345;
                    } else if (_0x4dd7ee < 0) {
                        _0x4dd7ee *= -1;
                    }
                    return _0x4dd7ee;
                }
            },
            reverseStr: function (_0x2c60dd) {
                var _0x47e3d2 = _0x2c60dd["split"]("");
                var _0x221a69 = _0x47e3d2.reverse();
                return _0x221a69["join"]("");
            },
            splitEvenOddStr: function (_0x182050) {
                var _0xf55a0 = [];
                var _0x5b1f4a = [];
                var _0xac3f06 = _0x182050.split("");
                for (var _0x429066 = 0; _0x429066 < _0xac3f06["length"]; _0x429066++) {
                    if (_0x429066 % 2 === 0) {
                        _0xf55a0["push"](_0xac3f06[_0x429066]);
                    } else {
                        _0x5b1f4a["push"](_0xac3f06[_0x429066]);
                    }
                }
                return [_0xf55a0["join"](""), _0x5b1f4a["join"]("")];
            },
            hashStr: function (_0x576f67) {
                var _0x266ced = 0;
                var _0x571f81;
                if (_0x576f67.length == 0) {
                    return _0x266ced;
                }
                for (_0x571f81 = 0; _0x571f81 < _0x576f67.length; _0x571f81++) {
                    var _0x28fe2e = _0x576f67["charCodeAt"](_0x571f81);
                    _0x266ced = (_0x266ced << 5) - _0x266ced + _0x28fe2e;
                    _0x266ced = _0x266ced & _0x266ced;
                }
                return _0x266ced;
            }
        },
        kee: {
            URLSafeBase64CharCode2IntMap: [
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                0x3e,
                -0x1,
                -0x1,
                0x0,
                0x1,
                0x2,
                0x3,
                0x4,
                0x5,
                0x6,
                0x7,
                0x8,
                0x9,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                0xa,
                0xb,
                0xc,
                0xd,
                0xe,
                0xf,
                0x10,
                0x11,
                0x12,
                0x13,
                0x14,
                0x15,
                0x16,
                0x17,
                0x18,
                0x19,
                0x1a,
                0x1b,
                0x1c,
                0x1d,
                0x1e,
                0x1f,
                0x20,
                0x21,
                0x22,
                0x23,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                0x3f,
                -0x1,
                0x24,
                0x25,
                0x26,
                0x27,
                0x28,
                0x29,
                0x2a,
                0x2b,
                0x2c,
                0x2d,
                0x2e,
                0x2f,
                0x30,
                0x31,
                0x32,
                0x33,
                0x34,
                0x35,
                0x36,
                0x37,
                0x38,
                0x39,
                0x3a,
                0x3b,
                0x3c,
                0x3d,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1,
                -0x1
            ],
            URLSafeBase64Int2CharMap: [
                '0',
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H',
                'I',
                'J',
                'K',
                'L',
                'M',
                'N',
                'O',
                'P',
                'Q',
                'R',
                'S',
                'T',
                'U',
                'V',
                'W',
                'X',
                'Y',
                'Z',
                'a',
                'b',
                'c',
                'd',
                'e',
                'f',
                'g',
                'h',
                'i',
                'j',
                'k',
                'l',
                'm',
                'n',
                'o',
                'p',
                'q',
                'r',
                's',
                't',
                'u',
                'v',
                'w',
                'x',
                'y',
                'z',
                '-',
                '_'
            ],
            TAIL_KEEINT: "",
            initTS: Date.now(),
            lastKeeTS: -1,
            ciderb64int: null,
            keehist: null,
            keehistPos: 0,
            tf: "",
            prevString: "",
            init: function (_0x521be8) {
                this["TAIL_KEEINT"] = this["URLSafeBase64CharCode2IntMap"][95];
                this.lastKeeTS = -1;
                this["ciderb64int"] = null;
                this["keehist"] = null;
                this["keehistPos"] = 0;
                this["prevString"] = "";
                if (_0x521be8 == null || _0x521be8.length < 64) {
                    return;
                }
                if (_0x521be8["length"] >= 64) {
                    _0x521be8 = _0x521be8["substring"](0, 64);
                }
                var _0x3cf630 = new Array(_0x521be8["length"]);
                var _0x5a68ce = this.URLSafeBase64CharCode2IntMap[_0x521be8["charCodeAt"](_0x521be8["length"] - 1)];
                for (var _0x4a53d7 = 0; _0x4a53d7 < _0x521be8.length; _0x4a53d7++) {
                    var _0x39276b = _0x521be8.charCodeAt(_0x4a53d7);
                    var _0x1366c5 = this["URLSafeBase64CharCode2IntMap"][_0x39276b];
                    _0x3cf630[_0x4a53d7] = _0x1366c5 ^ _0x5a68ce;
                    _0x5a68ce = _0x1366c5;
                }
                this["cide" + "rb6" + "4int"] = _0x3cf630;
                this["keehist"] = _0x3cf630["slice"](0, _0x3cf630.length);
                this["ke" + "ehis" + "tPos"] = 0;
            },
            getKey: function (_0x745947) {
                var _0x4625c4 = "";
                var _0x3f5236 = _0x745947;
                var _0x2c9411 = this["prevString"];
                if (_0x3f5236 != null && _0x2c9411.length <= _0x3f5236.length) {
                    _0x3f5236["split"]("")["forEach"](function (_0x26cd15, _0x4e413d) {
                        if (_0x26cd15 != _0x2c9411.charAt(_0x4e413d)) {
                            _0x4625c4 += _0x26cd15;
                        }
                    });
                    this["prevString"] = _0x3f5236;
                    return _0x4625c4[0];
                } else {
                    this["prevString"] = _0x3f5236 == null ? "" : _0x3f5236;
                    return "Backspace";
                }
            },
            play: function (_0x36a248) {
                var _0x21ebf4 = this["cide" + "rb6" + "4int"];
                if (_0x21ebf4 == null) {
                    return false;
                }
                var _0x507f96 = this["getKey"](_0x36a248["value"]);
                var _0x3aad05 = this.keehist;
                var _0x2acaae = this["ke" + "ehistP" + "os"];
                var _0x59b57e = Date["now"]();
                var _0x365485 = this["las" + "tKe" + "eTS"];
                if (_0x2acaae === 0) {
                    var _0x306798 = Math["round"]((_0x59b57e - this["ini" + "tTS"]) / 500);
                    if (_0x306798 > 3900) {
                        _0x306798 = 3900;
                    }
                    var _0x36a248 = Math["floor"](_0x306798 / 64);
                    var _0xe3d30d = Math["round"](_0x306798 % 64);
                    _0x3aad05[0] = _0x21ebf4[0] ^ _0x36a248;
                    _0x3aad05[1] = _0x21ebf4[1] ^ _0xe3d30d;
                    _0x3aad05[2] = _0x21ebf4[2] ^ this["TAIL_KEEINT"];
                    _0x2acaae += 2;
                    this["ke" + "ehistP" + "os"] = _0x2acaae;
                }
                if (_0x507f96 === "-" || _0x507f96 === 45) {
                    return false;
                }
                if (_0x507f96 === "Ba" + "cksp" + "ace" || _0x507f96 === 8) {
                    _0x507f96 = "-";
                }
                if (typeof _0x507f96 === "string" && _0x507f96["length"] > 1) {
                    return false;
                }
                var _0x11f6f8 = typeof _0x507f96 === "string" ? _0x507f96["charCodeAt"](0) : _0x507f96;
                var _0x598c05 = _0x11f6f8 in this["URLSafeBase64CharCode2IntMap"] ? this["URLSafeBase64CharCode2IntMap"][_0x11f6f8] : -1;
                var _0x2a173e = _0x36a248["ct" + "rlK" + "ey"] || _0x36a248.altKey;
                if (_0x2a173e || _0x598c05 < 0 || _0x2acaae > 52) {
                    return false;
                }
                var _0x306798 = Math["round"]((_0x365485 < 0 ? 0 : _0x59b57e - _0x365485) / 30);
                if (_0x306798 > 63) {
                    _0x306798 = 63;
                }
                _0x3aad05[_0x2acaae] = _0x21ebf4[_0x2acaae] ^ _0x598c05;
                _0x3aad05[_0x2acaae + 1] = _0x21ebf4[_0x2acaae + 1] ^ _0x306798;
                _0x3aad05[_0x2acaae + 2] = _0x21ebf4[_0x2acaae + 2] ^ this["TAIL_KEEINT"];
                this["ke" + "ehis" + "tPos"] = _0x2acaae + 2;
                this["las" + "tKe" + "eTS"] = _0x59b57e;
                return true;
            },
            getKeesString: function () {
                if (this["ciderb64int"] == null) {
                    return "0";
                }
                var result = new Array(this["keehist"]["length"]);
                for (var i = 0; i < this["keehist"]["length"]; i++) {
                    result[i] = this["URLSafeBase64Int2CharMap"][this.keehist[i]];
                }
                return result.join("");
            },
            _DEBUG_getkeehistoryReadable: function () {
                if (this["ciderb64int"] == null) {
                    return "";
                }
                var _0x20328d = "";
                var _0x3c1cc8 = "";
                var _0x408162 = this["keehist"][0] ^ this["ciderb64int"][0];
                var _0x1d8a3d = this["keehist"][1] ^ this["ciderb64int"][1];
                var _0xa83b13 = (_0x408162 * 64 + _0x1d8a3d) / 2;
                for (var _0x460cd6 = 2; _0x460cd6 < this["keehist"]["length"]; _0x460cd6 += 2) {
                    var _0x3980e6 = this["ciderb64int"][_0x460cd6];
                    var _0x41168b = this.keehist[_0x460cd6] ^ _0x3980e6;
                    var _0x3aad3b = this["URLSafeBase64Int2CharMap"][_0x41168b];
                    _0x20328d += _0x3aad3b;
                    if (_0x3aad3b == "_") {
                        lastpos = _0x460cd6;
                    }
                    _0x3980e6 = this["ciderb64int"][_0x460cd6 + 1];
                    _0x41168b = this.keehist[_0x460cd6 + 1] ^ _0x3980e6;
                    _0x3c1cc8 += _0x41168b + ",";
                }
                return _0x20328d + "|" + _0x3c1cc8 + "| FirstKeyTimeSec: " + _0xa83b13;
            }
        },
        api: {
            request: {
                logUnexpectedJsError: function (_0x3d6c88, _0x46a74c) {
                    var _0x497382 = constants["util"]["constructURI"]({
                        sk: _0x33a29e["sitekey"],
                        bd: _0x33a29e.hostname,
                        info: _0x3d6c88,
                        stack: _0x46a74c
                    }, "logJSError");
                    constants["api"]["request"]["AJAXRequest"](_0x497382);
                },
                getCT: function (_0x26664c) {
                    var _0xae5801 = constants["util"]["constructURI"]({
                        sk: _0x26664c.sitekey,
                        bd: _0x26664c["hostname"],
                        rt: Math["floor"](Date["now"]()),
                        tsh: constants.hash.generate["transactionSignature"](_0x26664c["sitekey"], "mtcap@mtcaptcha.com") || "$",
                        act: _0x26664c["action"] || "$",
                        ss: _0x26664c["sessionID"],
                        lf: _0x26664c.lf,
                        tl: _0x26664c["textLength"] != 0 ? _0x26664c.textLength : "$",
                        lg: _0x26664c["lang"],
                        tp: _0x26664c["widgetSize"] == constants["constant"]["standard"] ? "s" : "m"
                    }, "challengeToken");
                    this.AJAXRequest(_0xae5801, _0x26664c, constants["api"]["callback"]["ctCallback"]);
                },
                getImg: function (_0x38f323) {
                    var _0x49167c = constants["util"]["constructURI"]({
                        sk: _0x38f323.sitekey,
                        ct: _0x38f323.ct,
                        fa: _0x38f323.fa || "$",
                        ss: _0x38f323["sessionID"]
                    }, "image");
                    this["AJAXRequest"](_0x49167c, _0x38f323, constants.api["callback"]["imageCallback"]);
                },
                getAudio: function (_0x2cd488) {
                    var _0x3a81d4 = constants["util"]["constructURI"]({
                        sk: _0x2cd488.sitekey,
                        ct: _0x2cd488.ct,
                        fa: _0x2cd488.fa || "$",
                        ss: _0x2cd488.sessionID
                    }, "audio");
                    this["AJAXRequest"](_0x3a81d4, _0x2cd488, constants.api["callback"].audioCallback);
                },
                solvechallenge: function (_0x291dc1, widgetInstance) {
                    var _0x60db32 = Math["floor"](Date["now"]());
                    var instance = constants["util"]["getObject"](widgetInstance);
                    instance.isVerifying = true;
                    if (instance["isLowFriction"]) {
                        var _0x87e796 = "$";
                    } else {
                        if (instance.challengeType != "imageonly") {
                            constants.UI["events"].audio["stop"](instance);
                        }
                        var _0x87e796 = constants.UI.e[widgetInstance]["inputText"]["value"];
                        _0x87e796 = _0x87e796["replace"](/[^a-z0-9$]/gi, "");
                        if (_0x87e796["length"] < instance["anslen"]) {
                            setTimeout(function () {
                                if (document["activeElement"] != constants.UI.e[instance["widgetInstance"]]["inputText"]) {
                                    instance["incompleteSol"] = true;
                                    constants["status"].setStatus(constants["status"]["code"].internal.CAPTCHA_SOLUTION_INCOMPLETE);
                                }
                            }, 2000);
                            return;
                        } else if (_0x87e796.length > instance.anslen) {
                            _0x87e796 = _0x87e796["substring"](0, instance.anslen);
                            constants.UI.e[widgetInstance]["inputText"]["value"] = _0x87e796;
                        }
                        instance["incompleteSol"] = false;
                    }
                    if (instance["sCode"] != constants["status"].code["general"].CAP_VERIFIED) {
                        constants.status["setStatus"](constants["status"].code["internal"]["VERIFIYING_INPUT"]);
                        instance.qh = instance["enableTestMode"] != undefined && instance["enableTestMode"] != "" ? constants.hash["generate"].automatedTestCode(instance.ct, instance["enableTestMode"]) : "$";
                        var sendChallengeURLParams = {
                            ct: instance.ct,
                            sk: instance.sitekey,
                            st: _0x87e796,
                            lf: instance.lf,
                            bd: instance.hostname,
                            rt: _0x60db32,
                            tsh: constants.hash["generate"]["transactionSignature"](instance["sitekey"], "mtcap@mtcaptcha.com") || "$",
                            fa: instance["hasFoldChlg"] && !instance["foldChlg"].preRes ? constants["FoldChlg"]["solve"](instance["foldChlg"]["fseed"], instance.foldChlg["fslots"], instance.foldChlg["fdepth"]) : instance.fa,
                            qh: instance.qh || "$",
                            act: instance["action"] || "$",
                            ss: instance["sessionID"],
                            tl: instance["textLength"] != 0 ? instance["textLength"] : "$",
                            lg: instance["lang"],
                            tp: instance["widgetSize"] == constants["constant"]["standard"] ? "s" : "m",
                            kt: constants["kee"]["getKeesString"](),
                            fs: instance["foldChlg"]["fseed"] ? instance["foldChlg"]["fseed"] : 0
                        };
                        sendChallengeURLParams = constants["util"]["constructURI"](sendChallengeURLParams, "solvechallenge");
                        if (instance.hasWaitChlg && !instance["enableTestMode"]) {
                            if (instance["waitChlg"] > new Date().getTime()) {
                                setTimeout(function () {
                                    constants["api"]["request"]["AJAXRequest"](sendChallengeURLParams, instance, constants["api"]["callback"]["validateCallback"]);
                                }, instance["waitChlg"] - new Date()["getTime"]());
                            } else {
                                this["AJAXRequest"](sendChallengeURLParams, instance, constants.api["callback"].validateCallback);
                            }
                        } else {
                            this["AJAXRequest"](sendChallengeURLParams, instance, constants["api"]["callback"]["validateCallback"]);
                        }
                    }
                    if (_0x291dc1) {
                        if (_0x291dc1["preventDefault"]) {
                            _0x291dc1.preventDefault();
                        } else {
                            _0x291dc1.returnValue = false;
                        }
                    }
                },
                getAPIURL: function (_0x48375b) {
                    var _0x5d334e = window.location["protocol"] + "//" + _0xfd277a + "/mtcv1/api/";
                    switch (_0x48375b) {
                        case "challengeToken":
                            _0x5d334e += "getchallenge.json";
                            break;
                        case "image":
                            _0x5d334e += "getimage.json";
                            break;
                        case "audio":
                            _0x5d334e += "getaudio.json";
                            break;
                        case "solvechallenge":
                            _0x5d334e += "solvechallenge.json";
                            break;
                        case "downloadAudio":
                            _0x5d334e += "getaudio.mp3";
                            break;
                        case "logJSError":
                            _0x5d334e += "logJSError.json";
                            break;
                    }
                    return _0x5d334e;
                },
                AJAXRequest: function (_0x574efa, _0x28de68, _0x30de4b) {
                    if (_0x574efa === undefined || _0x574efa === null || _0x574efa === "") {
                        return;
                    }
                    var _0xd24409 = window["XMLHttpRequest"] ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
                    try {
                        _0xd24409["open"]("GET", _0x574efa, true);
                        _0xd24409["timeout"] = 20000;
                        _0xd24409.onreadystatechange = function () {
                            if (_0xd24409["readyState"] == 4) {
                                if (_0xd24409.status == 200) {
                                    try {
                                        _0x30de4b(JSON.parse(_0xd24409["response"] || _0xd24409["responseText"]));
                                    } catch (_0x448829) {
                                        if (!_0x28de68["widgetEnabled"]) {
                                            constants.UI["renderCaptcha"](_0x28de68);
                                            constants.postMessage(_0x28de68, "showCaptcha", {});
                                            constants["util"]["widgetHeightChange"](_0x28de68);
                                        }
                                        constants.widget["error"](_0x28de68, "Error Occurred, Please try again...");
                                        constants.log["warn"](_0x28de68, "Error occurred - " + _0x448829);
                                    }
                                } else if (_0xd24409["status"] != 0) {
                                    if (!_0x28de68["widgetEnabled"]) {
                                        constants.UI["renderCaptcha"](_0x28de68);
                                        constants["postMessage"](_0x28de68, "showCaptcha", {});
                                        constants.util["widgetHeightChange"](_0x28de68);
                                    }
                                    constants.api["callback"]["handleHTTPLevelError"](_0xd24409.status);
                                }
                            }
                        };
                        _0xd24409.ontimeout = function () {
                            if (!_0x28de68["widgetEnabled"]) {
                                constants.UI["renderCaptcha"](_0x28de68);
                                constants["util"]["widgetHeightChange"](_0x28de68);
                            }
                            constants["widget"]["error"](_0x28de68, _0x28de68["langTxt"].connectionError, constants["status"]["code"]["general"]["CONNECTION_ERR"]);
                            constants["log"].error(_0x28de68, _0x28de68["langTxt"].connectionError, constants.status.code["general"]["CONNECTION_ERR"]);
                        };
                        _0xd24409.onerror = function (_0x5e754e) {
                            if (!_0x28de68.widgetEnabled) {
                                constants.UI["renderCaptcha"](_0x28de68);
                                constants["util"].widgetHeightChange(_0x28de68);
                            }
                            constants["widget"]["networkFailed"](_0x28de68, constants.status["code"]["general"]["CONNECTION_ERR"]);
                            constants.log["error"](_0x28de68, "Network Connectivity Issues", constants["status"]["code"].general["CONNECTION_ERR"]);
                        };
                        _0xd24409.send();
                    } catch (_0x319be1) {
                        constants["log"]["warn"](_0x28de68, "Error occurred - " + _0x319be1);
                    }
                }
            },
            callback: {
                handleAPILevelError: function (_0x7e016a) {
                    var _0x59356f = constants["status"]["code"]["api"];
                    var _0x2b120e = _0x7e016a["code"];
                    switch (_0x2b120e) {
                        case _0x59356f.BAD_SITEKEY:
                            constants["widget"]["error"](_0x33a29e, constants.status.messages[_0x59356f.BAD_SITEKEY], _0x59356f.BAD_SITEKEY, true);
                            constants["log"].error(_0x33a29e, constants["status"]["messages"][_0x59356f["BAD_SITEKEY"]], _0x59356f["BAD_SITEKEY"]);
                            break;
                        case _0x59356f["SITEKEY_EXPIRED"]:
                            constants.widget["error"](_0x33a29e, constants["status"]["messages"][_0x59356f.SITEKEY_EXPIRED], _0x59356f.SITEKEY_EXPIRED, true);
                            constants["log"]["error"](_0x33a29e, constants["status"]["messages"][_0x59356f["SITEKEY_EXPIRED"]], _0x59356f["SITEKEY_EXPIRED"]);
                            break;
                        case _0x59356f["DOMAIN_NOTMATCH"]:
                            constants["widget"]["error"](_0x33a29e, constants["status"]["messages"][_0x59356f["DOMAIN_NOTMATCH"]], _0x59356f["DOMAIN_NOTMATCH"], true);
                            constants["log"]["error"](_0x33a29e, constants["status"].messages[_0x59356f["DOMAIN_NOTMATCH"]], _0x59356f["DOMAIN_NOTMATCH"]);
                            break;
                        case _0x59356f["BAD_TESTKEY"]:
                            constants.widget["error"](_0x33a29e, constants.status["messages"][_0x59356f.BAD_TESTKEY], _0x59356f["BAD_TESTKEY"], true);
                            constants["log"]["error"](_0x33a29e, constants.status["messages"][_0x59356f["BAD_TESTKEY"]], _0x59356f["BAD_TESTKEY"]);
                            break;
                        case _0x59356f["RESTART_CAPTCHA_TRANSACTION"]:
                        case _0x59356f["RESTART_CAPTCHA_CHALLENGE_EXPIRED"]:
                            _0x33a29e["initialLoad"] = false;
                            constants["api"].request["getCT"](_0x33a29e);
                            break;
                        case _0x59356f["REQ_ERR"]:
                        case _0x59356f["BAD_CHALLENGETOKEN"]:
                        case _0x59356f.BAD_CPUFOLD_ANSWER:
                        case _0x59356f["MISMATCH_CHALLENGETOKEN_DATA"]:
                        default:
                            constants["widget"]["error"](_0x33a29e, "Something went wrong, Please try again...", _0x2b120e);
                            constants["log"]["error"](_0x33a29e, _0x7e016a["result"]["msgs"].errUsrMsg || "Something went wrong, Please try again... (" + _0x2b120e + ")", _0x2b120e);
                            constants.util["widgetHeightChange"](_0x33a29e);
                            break;
                    }
                },
                handleHTTPLevelError: function (_0x12f71a) {
                    var _0x46832c = constants["status"].code["http"];
                    switch (_0x12f71a) {
                        case _0x46832c["HTTP_ERROR"]:
                            constants.widget["error"](_0x33a29e, constants["status"]["messages"][_0x46832c.HTTP_ERROR], _0x46832c["HTTP_ERROR"]);
                            constants["log"]["error"](_0x33a29e, constants["status"]["httpErrorMessages"][_0x46832c.HTTP_ERROR], _0x46832c["HTTP_ERROR"]);
                            break;
                        case _0x46832c["HTTP_ERROR404"]:
                            constants.widget["error"](_0x33a29e, constants.status["messages"][_0x46832c["HTTP_ERROR404"]], _0x46832c.HTTP_ERROR404);
                            constants["log"].error(_0x33a29e, constants.status["httpErrorMessages"][_0x46832c["HTTP_ERROR404"]], _0x46832c["HTTP_ERROR404"]);
                            break;
                        case _0x46832c["TOO_MANY_REQUEST"]:
                            constants.widget.error(_0x33a29e, constants.status["messages"][_0x46832c.TOO_MANY_REQUEST], _0x46832c["TOO_MANY_REQUEST"]);
                            constants["log"]["error"](_0x33a29e, constants.status["httpErrorMessages"][_0x46832c["TOO_MANY_REQUEST"]], _0x46832c.TOO_MANY_REQUEST);
                            break;
                        case _0x46832c["INTERNAL_SERVER_ERROR"]:
                            constants["widget"].error(_0x33a29e, constants["status"]["messages"][_0x46832c["INTERNAL_SERVER_ERROR"]], _0x46832c["INTERNAL_SERVER_ERROR"]);
                            constants["log"]["error"](_0x33a29e, constants["status"]["httpErrorMessages"][_0x46832c.INTERNAL_SERVER_ERROR], _0x46832c["INTERNAL_SERVER_ERROR"]);
                            break;
                        case _0x46832c.CONNECTION_TIMEOUT:
                            constants["widget"]["error"](_0x33a29e, constants["status"]["messages"][_0x46832c["CONNECTION_TIMEOUT"]], _0x46832c["CONNECTION_TIMEOUT"]);
                            constants["log"]["error"](_0x33a29e, constants["status"]["httpErrorMessages"][_0x46832c.CONNECTION_TIMEOUT], _0x46832c["CONNECTION_TIMEOUT"]);
                            break;
                        default:
                            constants["widget"]["error"](_0x33a29e, "Error Occurred, Please try again...", _0x12f71a);
                            constants["log"].error(_0x33a29e, "Error Occurred, Please try again...", _0x12f71a);
                    }
                },
                ctCallback: function (_0x35ce03) {
                    if (_0x35ce03["code"] !== constants.status.code["api"].OK) {
                        constants["api"]["callback"]["handleAPILevelError"](_0x35ce03);
                        return;
                    }
                    if (_0x35ce03["result"]["msgs"] && _0x35ce03["result"]["msgs"]["warnSysMsg"]) {
                        constants["log"]["warn"](_0x33a29e, _0x35ce03["result"]["msgs"]["warnSysMsg"]);
                    }
                    var _0x27d345 = _0x35ce03["result"];
                    if (_0x27d345["challenge"]["hasFoldChlg"]) {
                        constants["kee"].init(_0x27d345["challenge"]["foldChlg"]["fseed"]);
                    } else {
                        constants["kee"]["init"](null);
                    }
                    if (_0x27d345["challenge"]) {
                        _0x33a29e["captcahRenderedTime"] = new Date()["getTime"]();
                        _0x33a29e["anslen"] = _0x27d345["challenge"]["textChlg"].textlen;
                        _0x33a29e.ct = _0x27d345.challenge.ct;
                        _0x33a29e["hasFoldChlg"] = _0x27d345.challenge["hasFoldChlg"];
                        _0x33a29e["foldChlg"] = _0x27d345.challenge["foldChlg"];
                        _0x33a29e["isDevMode"] = _0x27d345["context"].devMode;
                        _0x33a29e.fa = _0x33a29e["hasFoldChlg"] && _0x33a29e["foldChlg"]["preRes"] ? constants["FoldChlg"]["solve"](_0x33a29e["foldChlg"]["fseed"], _0x33a29e.foldChlg["fslots"], _0x33a29e["foldChlg"].fdepth) : "$";
                        _0x33a29e["isMTCLinksDisabled"] = _0x27d345["context"]["hideTerms"];
                        _0x33a29e["isMTCPowByDisabled"] = _0x27d345["context"]["hidePowBy"];
                        _0x33a29e["hasWaitChlg"] = _0x27d345["challenge"]["hasWaitChlg"];
                        _0x33a29e["hasTextChlg"] = _0x27d345["challenge"]["hasTextChlg"];
                        _0x33a29e["waitChlg"] = _0x33a29e["captcahRenderedTime"] + constants["util"]["convertTimeHexToNumber"](_0x27d345.challenge["waitChlg"]["time"]);
                        constants.expire["setCTExpireTimer"](_0x33a29e, _0x27d345.challenge["ctttl"]);
                        if (_0x27d345["challenge"]["hasTextChlg"]) {
                            _0x33a29e["isLowFriction"] = false;
                            if (!_0x33a29e["isVisible"]) {
                                constants["postMessage"](_0x33a29e, "showCaptcha", {});
                            }
                            _0x33a29e["isVisible"] = true;
                            if (_0x33a29e["enableMouseFlow"] == true && !_0x33a29e["isMouseFlowEnabled"]) {
                                window["_mfq"] = window["_mfq"] || [];
                                var _0x5eb979 = document.createElement("script");
                                _0x5eb979.type = "text/javascript";
                                _0x5eb979.async = true;
                                _0x5eb979["src"] = "//cdn.mouseflow.com/projects/IFRAME_MOUSE_FLOW_KEY.js";
                                document.getElementsByTagName("head")[0].appendChild(_0x5eb979);
                                _0x33a29e["isMouseFlowEnabled"] = true;
                            }
                            constants.UI.renderCaptcha(_0x33a29e);
                            if (_0x33a29e["initialLoad"]) {
                                _0x33a29e["sCode"] = 2200;
                                constants["postMessage"](_0x33a29e, "rendered", {
                                    msg: "Captcha rendered"
                                });
                            }
                            constants["api"]["request"].getImg(_0x33a29e);
                            if (!constants["autoPlay"] && _0x33a29e["challengeType"] != "imageonly") {
                                _0x326741 = false;
                                constants["api"]["request"].getAudio(_0x33a29e);
                            }
                        } else if (_0x27d345["challenge"]["textChlg"]["textlen"] == -1) {
                            _0x33a29e["isLowFriction"] = true;
                            _0x33a29e["isVisible"] = false;
                            constants["postMessage"](_0x33a29e, "removeAnimation", {});
                            constants["api"]["request"]["solvechallenge"](null, _0x33a29e["widgetInstance"]);
                        }
                    }
                },
                imageCallback: function (_0x41138b) {
                    if (_0x41138b.code !== constants["status"]["code"]["api"].OK) {
                        constants["api"]["callback"]["handleAPILevelError"](_0x41138b);
                        return;
                    }
                    if (_0x41138b.result["msgs"] && _0x41138b.result["msgs"]["warnSysMsg"]) {
                        constants["log"]["warn"](_0x33a29e, _0x41138b["result"]["msgs"]["warnSysMsg"]);
                    }
                    var _0xeca219 = constants.UI.e[_0x33a29e["widgetInstance"]]["imageContainer"];
                    var _0x1a0b0c = constants.UI.e[_0x33a29e.widgetInstance].noCssImage;
                    _0x33a29e["image"] = _0x41138b["result"]["img"]["image64"];
                    _0x1a0b0c["src"] = "data:image/png;base64," + _0x33a29e.image;
                    if (!_0x33a29e["initialLoad"]) {
                        constants["util"]["doAnimation"](_0xeca219, "fadein 1s ease-out");
                    }
                    _0xeca219.style["backgroundImage"] = "url('data:image/png;base64," + _0x33a29e["image"] + "')";
                    _0xeca219["style"]["filter"] = "none";
                    _0xeca219["style"]["backgroundRepeat"] = "no-repeat";
                    _0xeca219["style"]["backgroundSize"] = "auto";
                    constants["widget"]["enable"](_0x33a29e);
                    if (constants["util"]["canSolveChallenge"]()) {
                        constants["api"]["request"]["solvechallenge"](event, _0x33a29e["widgetInstance"]);
                    }
                    if (_0x33a29e["isMouseWithinAudioContainer"] && _0x33a29e.challengeType != "imageonly") {
                        constants.UI["events"]["audio"]["update"](constants.UI["events"]["audio"]["status"]);
                    }
                    if (typeof _0x39f824 != "undefined" && _0x39f824 != "" && constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"]["value"] == "") {
                        constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"]["value"] = constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"]["getAttribute"]("placeholder");
                    }
                    if (_0x3d0c7c == true) {
                        constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"]["focus"]();
                        if (document['body']["contains"](_0x4996ca)) {
                            document.getElementsByTagName('body')[0]["removeChild"](_0x4996ca);
                        }
                        _0x3d0c7c = false;
                    }
                },
                audioCallback: function (_0x28e937) {
                    if (_0x28e937["code"] !== constants["status"]["code"].api.OK) {
                        constants["api"]["callback"]["handleAPILevelError"](_0x28e937);
                        return;
                    }
                    if (_0x28e937["result"].msgs && _0x28e937.result["msgs"]["warnSysMsg"]) {
                        constants["log"]["warn"](_0x33a29e, _0x28e937.result.msgs.warnSysMsg);
                    }
                    _0x33a29e.audio = _0x28e937["result"]["aud"]["audio64"];
                    constants.UI.e[_0x33a29e.widgetInstance]["audioContainer"]["src"] = "data:audio/" + _0x28e937["result"]["aud"]["format"] + ";base64," + _0x33a29e.audio;
                    if (constants["autoPlay"] && _0x326741) {
                        constants.UI["events"]["audio"].play(_0x33a29e);
                    }
                },
                validateCallback: function (_0x409542) {
                    if (_0x409542["code"] !== constants["status"]["code"].api.OK) {
                        constants.api.callback["handleAPILevelError"](_0x409542);
                        return;
                    }
                    if (_0x409542["result"]["msgs"] && _0x409542["result"]["msgs"]["warnSysMsg"]) {
                        constants["log"]["warn"](_0x33a29e, _0x409542.result["msgs"]["warnSysMsg"]);
                    }
                    var _0x212c3e = _0x409542["result"];
                    clearTimeout(_0x33a29e["challengeExpireTimer"]);
                    if (!_0x33a29e["isLowFriction"]) {
                        constants.UI["events"]["status"].showRequired(_0x33a29e, false);
                    }
                    if (_0x212c3e.verifyResult["isVerified"]) {
                        _0x33a29e["verifiedToken"] = _0x212c3e.verifyResult["verifiedToken"].vt;
                        constants["expire"]["setSTExpireTimer"](_0x33a29e, _0x212c3e["verifyResult"]["verifiedToken"]["vtttl"]);
                        constants["status"].setStatus(constants.status.code["internal"]["VALIDATION_SUCCESS"]);
                    } else {
                        if (_0x33a29e["isLowFriction"]) {
                            _0x465276 = true;
                            _0x33a29e.lf = _0x33a29e["testmode_lowFrictionInvisible"] === "" ? "t0" : 0;
                            _0x33a29e.isLowFriction = true;
                            _0x33a29e.isVisible = false;
                        }
                        constants["status"].setStatus(constants["status"]["code"]["internal"].VALIDATION_FAILED);
                    }
                }
            }
        },
        UI: {
            renderCaptcha: function (_0x51d223) {
                if (constants.lang.aria[_0x51d223["lang"]] === undefined) {
                    _0x51d223["ariaTxt"] = constants["lang"].aria.en;
                    document["querySelector"]("html")["setAttribute"]("lang", "en");
                } else {
                    _0x51d223.ariaTxt = constants["lang"].aria[_0x51d223["lang"]];
                    document["querySelector"]("html")["setAttribute"]("lang", _0x51d223["lang"]);
                }
                if (_0x51d223.widgetSize == constants["constant"]["mini"]) {
                    _0x51d223["langTxt"] = _0x51d223.customLangText != undefined && _0x51d223.customLangText["hasOwnProperty"](_0x51d223["lang"]) ? _0x51d223["customLangText"][_0x51d223["lang"]] : constants["lang"].miniDefaults[_0x51d223["lang"]];
                    if (!_0x51d223.langTxt) {
                        _0x51d223.langTxt = constants.lang["miniDefaults"].en;
                    }
                    if (_0x51d223["initialLoad"]) {
                        this["createMiniWidget"](_0x51d223["counter"], _0x51d223["langTxt"]);
                    }
                    this.postRender(_0x51d223);
                    if (_0x51d223["miniFormWidth"] || _0x51d223.miniFormHeight) {
                        var _0x28a57d = constants.UI.e[_0x51d223["widgetInstance"]];
                        var _0x44be74 = _0x28a57d ? _0x28a57d["card"]["clientWidth"] + constants["util"]["getBorderOfCaptcha"](_0x28a57d) : undefined;
                        constants.util["setUserInputWidgetSize"](_0x51d223, constants.UI.e[_0x51d223["widgetInstance"]], _0x44be74);
                    }
                } else {
                    _0x51d223.langTxt = _0x51d223.customLangText != undefined && _0x51d223["customLangText"]["hasOwnProperty"](_0x51d223["lang"]) ? _0x51d223["customLangText"][_0x51d223["lang"]] : constants["lang"]["defaults"][_0x51d223["lang"]];
                    if (!_0x51d223.langTxt) {
                        _0x51d223.langTxt = constants.lang["defaults"].en;
                    }
                    if (_0x51d223.initialLoad) {
                        this.createStandardWidget(_0x51d223["counter"], _0x51d223["langTxt"]);
                    }
                    this.postRender(_0x51d223);
                }
            },
            createMiniWidget: function (_0x41d6ef, _0x9d491c) {
                try {
                    var _0x2a076c = "";
                    if (_0x33a29e["autoFadeOuterText"]) {
                        _0x2a076c = "mtcap-hidden";
                    }
                    document.getElementById("mtcap-main-" + _0x41d6ef)["innerHTML"] = "";
                    document["getElementById"]("mtcap-main-" + _0x41d6ef).style.padding = "0px";
                    document["getElementById"]("mtcap-main-" + _0x41d6ef).style.transform = "scale(1)";
                    this["append"]("div", {
                        class: "mtcap-card-mini",
                        id: "mtcap-card-" + _0x41d6ef
                    }, "mtcap-main-" + _0x41d6ef);
                    if (navigator.maxTouchPoints || "ontouchstart" in document.documentElement) {
                        this.append("div", {
                            id: "mtcap-touchripple-container-" + _0x41d6ef,
                            class: "mtcap-touchripple-container-mini"
                        }, "mtcap-main-" + _0x41d6ef)["append"]("div", {
                            class: "mtcap-touchripple-canvas-mini",
                            id: "mtcap-touchripple-canvas-" + _0x41d6ef
                        }, "mtcap-touchripple-container-" + _0x41d6ef)["append"]("img", {
                            class: "mtcap-ripple-mini",
                            "aria-hidden": "true",
                            id: "mtcap-ripple-" + _0x41d6ef,
                            src: constants["asserts"]["ripple"],
                            width: "50",
                            height: "50"
                        }, "mtcap-touchripple-canvas-" + _0x41d6ef);
                    }
                    this.append("div", {
                        class: "divTable mtcap-inputbox-mini mtcap-inputborder-mini mtcap-inputborder-custom",
                        id: "mtcap-inputbox-" + _0x41d6ef,
                        cellspacing: "0"
                    }, "mtcap-card-" + _0x41d6ef);
                    if (_0x33a29e["challengeType"] != "imageonly") {
                        this["append"]("div", {
                            class: "mtcap-audioctrl-mini " + _0x2a076c,
                            id: "mtcap-audioctrl-" + _0x41d6ef
                        }, "mtcap-card-" + _0x41d6ef).append("span", {
                            class: "mtcap-show-if-nocss-mini",
                            "aria-hidden": "true",
                            id: "desc4AudioButton-" + _0x41d6ef
                        }, "mtcap-audioctrl-" + _0x41d6ef, _0x33a29e.ariaTxt["default"]["audioButton"]).append("input", {
                            class: "mtcap-audioctrlicon-mini",
                            id: "mtcap-audioctrlicon-" + _0x41d6ef,
                            title: _0x33a29e["ariaTxt"]["default"].audioButton,
                            type: "button",
                            value: "",
                            "aria-keyshortcuts": ",",
                            "aria-labelledby": "desc4AudioButton-" + _0x41d6ef
                        }, "mtcap-audioctrl-" + _0x41d6ef)["append"]("div", {
                            class: "mtcap-audioctrlbg-mini",
                            id: "mtcap-audioctrlbg-" + _0x41d6ef
                        }, "mtcap-audioctrl-" + _0x41d6ef)["append"]("audio", {
                            id: "mtcap-audio-" + _0x41d6ef,
                            preload: "auto"
                        }, "mtcap-main-" + _0x41d6ef);
                    }
                    this["append"]("span", {
                        class: "mtcap-show-if-nocss-mini",
                        "aria-hidden": "true",
                        id: "desc4InputText-" + _0x41d6ef
                    }, "mtcap-inputbox-" + _0x41d6ef, _0x33a29e["ariaTxt"]["default"]["inputTextForm"]).append("input", {
                        class: "mtcap-noborder mtcap-inputtext-mini mtcap-inputtext-custom",
                        id: "mtcap-inputtext-" + _0x41d6ef,
                        type: "text",
                        placeholder: _0x9d491c["inputPrompt"],
                        autocomplete: "off",
                        autocorrect: "off",
                        pattern: "[a-zA-Z0-9]*",
                        "aria-labelledby": "desc4InputText-" + _0x41d6ef
                    }, "mtcap-inputbox-" + _0x41d6ef)["append"]("div", {
                        class: "mtcap-image-mini",
                        id: "mtcap-image-" + _0x41d6ef,
                        style: "filter : hue-rotate(" + Math["floor"](Math["random"]() * 37) * 10 + "deg);"
                    }, "mtcap-card-" + _0x41d6ef)["append"]("img", {
                        class: "mtcap-show-if-nocss-mini",
                        id: "mtcap-image-nocss-" + _0x41d6ef,
                        src: constants.asserts["noCSS"]
                    }, "mtcap-image-" + _0x41d6ef)["append"]("div", {
                        class: "mtcap-statusbox-wh-mini mtcap-inputborder-mini mtcap-inputborder-custom divTableRow",
                        id: "mtcap-statusbox-" + _0x41d6ef
                    }, "mtcap-card-" + _0x41d6ef)["append"]("span", {
                        class: "mtcap-hidden-aria",
                        "aria-live": "assertive",
                        "aria-hidden": "false",
                        id: "desc4CaptchaStatus-" + _0x41d6ef
                    }, "mtcap-statusbox-" + _0x41d6ef, _0x33a29e["ariaTxt"].default.statusButton)["append"]("span", {
                        class: "mtcap-show-if-nocss-mini",
                        "aria-hidden": "true",
                        id: "desc4StatusButton-" + _0x41d6ef
                    }, "mtcap-statusbox-" + _0x41d6ef, _0x33a29e["ariaTxt"]["default"]["statusButton"]).append("input", {
                        class: "mtcap-noborder mtcap-statusimg-mini",
                        id: "mtcap-statusimg-" + _0x41d6ef,
                        type: "text",
                        readonly: "readonly",
                        tabindex: "-1",
                        value: String["fromCharCode"](59648)
                    }, "mtcap-statusbox-" + _0x41d6ef)["append"]("input", {
                        class: "mtcap-noborder mtcap-mozbutton mtcap-statusbutton-mini",
                        id: "mtcap-statusbutton-" + _0x41d6ef,
                        type: "button",
                        "aria-labelledby": "desc4StatusButton-" + _0x41d6ef,
                        value: " "
                    }, "mtcap-statusbox-" + _0x33a29e["counter"])["append"]("div", {
                        class: "mtcap-msgbox " + _0x2a076c,
                        id: "mtcap-msgbox-" + _0x41d6ef
                    }, "mtcap-main-" + _0x41d6ef).append("div", {
                        class: "mtcap-msg mtcap-msg-custom",
                        id: "mtcap-msg-" + _0x41d6ef
                    }, "mtcap-msgbox-" + _0x41d6ef)["append"]("a", {
                        id: "mtcap-msglink-powered-by-" + _0x41d6ef,
                        class: "mtcap-msglink-active mtcap-msglink-custom mtcap-poweredby-link " + _0x2a076c,
                        href: "https://www.mtcaptcha.com",
                        target: "_blank"
                    }, "mtcap-msg-" + _0x41d6ef, _0x33a29e["langTxt"]["miniByMT"])["append"]("a", {
                        id: "mtcap-msglink-privacy-" + _0x41d6ef,
                        class: "mtcap-msglink-active mtcap-msglink-custom" + _0x2a076c,
                        href: "https://www.mtcaptcha.com/legal-privacy-captcha",
                        tabindex: "0",
                        role: "link",
                        target: "_blank"
                    }, "mtcap-msg-" + _0x41d6ef, _0x33a29e["langTxt"]["privacy"]).append("a", {
                        id: "mtcap-msglink-terms-" + _0x41d6ef,
                        class: "mtcap-msglink-active mtcap-msglink-custom" + _0x2a076c,
                        href: "https://www.mtcaptcha.com/legal-terms",
                        tabindex: "0",
                        role: "link",
                        target: "_blank"
                    }, "mtcap-msg-" + _0x41d6ef, _0x33a29e.langTxt["terms"]);
                    var _0x12c5f3 = document["getElementById"]("mtcap-image-" + _0x41d6ef);
                    constants["util"].doAnimation(_0x12c5f3, "fadein 1s ease-out");
                    constants.util.addEvent(window, "resize", function () {
                        constants.util.setUserInputWidgetSize(_0x33a29e, constants.UI.e[_0x33a29e.widgetInstance], window.innerWidth, window.innerHeight);
                    });
                } catch (_0x34e1c9) {
                    constants["log"]["warn"](_0x34e1c9);
                }
            },
            postRender: function (_0x452a30) {
                this.cacheDOMEle(_0x452a30);
                constants["style"]["apply"](_0x452a30);
                if (_0x452a30.initialLoad) {
                    constants["util"].widgetHeightChange(_0x452a30);
                    this["events"]["bind"](_0x452a30);
                    _0x452a30["sCode"] = 1201;
                    constants["widget"]["load"](_0x452a30, false);
                    constants["status"]["setStatus"](constants["status"]["code"]["internal"].CAPTCHA_LOADED);
                } else {
                    constants["util"]["addEvent"](constants.UI.e[_0x452a30.widgetInstance]["inputText"], "keyup", constants.UI.events["inputKeyup"]);
                    _0x452a30["sCode"] = constants["status"]["code"]["general"]["CAP_NOT_VERIFIED"];
                    _0x452a30["statusDesc"] = constants["status"].messages[constants["status"].code["general"]["CAP_NOT_VERIFIED"]];
                    constants.status["setStatus"](constants.status["code"].internal.CAPTCHA_NEWLY_LOADED);
                    setTimeout(function () {
                        constants["status"]["setStatus"](constants.status["code"]["internal"]["CAPTCHA_LOADED"]);
                    }, 2000);
                }
                _0x452a30.widgetEnabled = true;
                constants.util["widgetHeightChange"](_0x452a30);
                _0x744bea = 19;
                _0x137b6b = 14;
                _0x219534 = 18;
            },
            createStandardWidget: function (_0x41fc15, _0x320186) {
                try {
                    var _0x22fd92 = "";
                    if (_0x33a29e["autoFadeOuterText"]) {
                        _0x22fd92 = "mtcap-hidden";
                    }
                    document["getElementById"]("mtcap-main-" + _0x41fc15)["innerHTML"] = "";
                    this["append"]("div", {
                        class: "mtcap-card error-card",
                        id: "mtcap-error-card-" + _0x41fc15
                    }, "mtcap-main-" + _0x41fc15);
                    if (!_0x33a29e.isMTCLinksDisabled) {
                        this.append("div", {
                            id: "mtcap-legal-" + _0x41fc15,
                            class: "mtcap-msg mtcap-msg-custom mtcap-msg-legal-block "
                        }, "mtcap-main-" + _0x41fc15)["append"]("a", {
                            id: "mtcap-msglink-privacy-" + _0x41fc15,
                            class: "mtcap-msglink-active mtcap-msglink-custom " + _0x22fd92,
                            href: "https://www.mtcaptcha.com/legal-privacy-captcha",
                            tabindex: "0",
                            role: "link",
                            target: "_blank"
                        }, "mtcap-legal-" + _0x41fc15, _0x33a29e["langTxt"]["privacy"])["append"]("span", {
                            class: "mtcap-msglink mtcap-msglink-custom " + _0x22fd92,
                            id: "mtcap-ampersand-" + _0x41fc15
                        }, "mtcap-legal-" + _0x41fc15, " &amp; ").append("a", {
                            id: "mtcap-msglink-terms-" + _0x41fc15,
                            class: "mtcap-msglink-active mtcap-msglink-custom " + _0x22fd92,
                            href: "https://www.mtcaptcha.com/legal-terms",
                            tabindex: "0",
                            role: "link",
                            target: "_blank"
                        }, "mtcap-legal-" + _0x41fc15, _0x33a29e["langTxt"]["terms"]);
                    } else {
                        this["append"]("div", {
                            id: "mtcap-legal-" + _0x41fc15,
                            class: "mtcap-msg",
                            tabindex: "-1",
                            style: "height:15px"
                        }, "mtcap-main-" + _0x41fc15);
                    }
                    this["append"]("div", {
                        class: "mtcap-card",
                        id: "mtcap-card-" + _0x41fc15
                    }, "mtcap-main-" + _0x41fc15);
                    if (navigator["maxTouchPoints"] || "ontouchstart" in document.documentElement) {
                        this.append("div", {
                            id: "mtcap-touchripple-container-" + _0x41fc15,
                            class: "mtcap-touchripple-container"
                        }, "mtcap-main-" + _0x41fc15).append("div", {
                            class: "mtcap-touchripple-canvas",
                            id: "mtcap-touchripple-canvas-" + _0x41fc15
                        }, "mtcap-touchripple-container-" + _0x41fc15)["append"]("img", {
                            class: "mtcap-ripple",
                            "aria-hidden": "true",
                            id: "mtcap-ripple-" + _0x41fc15,
                            src: constants["asserts"]["ripple"],
                            width: "50",
                            height: "50"
                        }, "mtcap-touchripple-canvas-" + _0x41fc15);
                    }
                    if (_0x33a29e["challengeType"] != "imageonly") {
                        this.append("div", {
                            class: "mtcap-audioctrl",
                            id: "mtcap-audioctrl-" + _0x41fc15
                        }, "mtcap-card-" + _0x41fc15)["append"]("span", {
                            class: "mtcap-show-if-nocss",
                            "aria-hidden": "true",
                            id: "desc4AudioButton-" + _0x41fc15
                        }, "mtcap-audioctrl-" + _0x41fc15, _0x33a29e["ariaTxt"].default["audioButton"]).append("input", {
                            class: "mtcap-audioctrlicon",
                            id: "mtcap-audioctrlicon-" + _0x41fc15,
                            title: _0x33a29e["ariaTxt"]["default"]["audioButton"],
                            type: "button",
                            value: "",
                            "aria-keyshortcuts": ",",
                            "aria-labelledby": "desc4AudioButton-" + _0x41fc15
                        }, "mtcap-audioctrl-" + _0x41fc15).append("div", {
                            class: "mtcap-audioctrlbg",
                            id: "mtcap-audioctrlbg-" + _0x41fc15
                        }, "mtcap-audioctrl-" + _0x41fc15)["append"]("audio", {
                            id: "mtcap-audio-" + _0x41fc15,
                            preload: "auto"
                        }, "mtcap-main-" + _0x41fc15);
                    }
                    this["append"]("div", {
                        class: "mtcap-image",
                        "aria-label": "captcha image.",
                        id: "mtcap-image-" + _0x41fc15,
                        style: "filter : hue-rotate(" + Math["floor"](Math.random() * 37) * 10 + "deg);"
                    }, "mtcap-card-" + _0x41fc15)["append"]("img", {
                        class: "mtcap-show-if-nocss",
                        "aria-label": "captcha image.",
                        id: "mtcap-image-nocss-" + _0x41fc15,
                        src: constants["asserts"]["noCSS"]
                    }, "mtcap-image-" + _0x41fc15)["append"]("div", {
                        class: "divTable mtcap-inputbox",
                        id: "mtcap-inputbox-" + _0x41fc15,
                        cellspacing: "0"
                    }, "mtcap-card-" + _0x41fc15).append("div", {
                        id: "mtcap-tr-" + _0x41fc15,
                        class: "divTableRow"
                    }, "mtcap-inputbox-" + _0x41fc15)["append"]("div", {
                        class: "mtcap-inputborder mtcap-inputborder-custom mtcap-td-block",
                        style: "border-right:0px",
                        id: "mtcap-td-" + _0x41fc15
                    }, "mtcap-tr-" + _0x41fc15).append("span", {
                        class: "mtcap-show-if-nocss-mini",
                        "aria-hidden": "true",
                        id: "desc4InputText-" + _0x41fc15
                    }, "mtcap-inputbox-" + _0x41fc15, _0x33a29e["ariaTxt"]["default"]["inputTextForm"])["append"]("input", {
                        class: "mtcap-noborder mtcap-inputtext mtcap-inputtext-custom",
                        id: "mtcap-inputtext-" + _0x41fc15,
                        type: "text",
                        placeholder: _0x320186["inputPrompt"],
                        autocomplete: "off",
                        autocorrect: "off",
                        pattern: "[a-zA-Z0-9]*",
                        "aria-labelledby": "desc4InputText-" + _0x41fc15
                    }, "mtcap-td-" + _0x41fc15)["append"]("div", {
                        class: "mtcap-inputborder mtcap-inputborder-custom mtcap-statusbox-wh",
                        id: "mtcap-statusbox-" + _0x41fc15
                    }, "mtcap-tr-" + _0x41fc15)["append"]("span", {
                        class: "mtcap-hidden-aria",
                        "aria-live": "assertive",
                        "aria-hidden": "false",
                        id: "desc4CaptchaStatus-" + _0x41fc15
                    }, "mtcap-statusbox-" + _0x41fc15, _0x33a29e["ariaTxt"].default["statusButton"]).append("span", {
                        class: "mtcap-show-if-nocss",
                        "aria-hidden": "true",
                        id: "desc4StatusButton-" + _0x41fc15
                    }, "mtcap-statusbox-" + _0x41fc15, _0x33a29e.ariaTxt["default"]["statusButton"])["append"]("input", {
                        class: "mtcap-noborder mtcap-statusimg",
                        id: "mtcap-statusimg-" + _0x41fc15,
                        type: "text",
                        readonly: "readonly",
                        tabindex: "-1",
                        value: String["fromCharCode"](59648)
                    }, "mtcap-statusbox-" + _0x41fc15)["append"]("input", {
                        class: "mtcap-noborder mtcap-mozbutton mtcap-statusbutton",
                        id: "mtcap-statusbutton-" + _0x41fc15,
                        type: "button",
                        "aria-labelledby": "desc4StatusButton-" + _0x41fc15,
                        value: " "
                    }, "mtcap-statusbox-" + _0x33a29e["counter"]).append("div", {
                        class: "mtcap-msgbox " + _0x22fd92,
                        id: "mtcap-msgbox-" + _0x41fc15
                    }, "mtcap-main-" + _0x41fc15)["append"]("div", {
                        class: "mtcap-msg mtcap-msg-custom",
                        id: "mtcap-msg-" + _0x41fc15
                    }, "mtcap-msgbox-" + _0x41fc15);
                    if (!_0x33a29e["isMTCPowByDisabled"]) {
                        this["append"]("a", {
                            id: "mtcap-msglink-powered-by-" + _0x41fc15,
                            class: "mtcap-msglink-active mtcap-msglink-custom mtcap-poweredby-link",
                            href: "https://www.mtcaptcha.com",
                            target: "_blank"
                        }, "mtcap-msg-" + _0x41fc15, _0x33a29e.langTxt.byMT);
                    }
                    this.append("div", {
                        class: "mtcap-alert",
                        id: "mtcap-alert-" + _0x41fc15
                    }, "mtcap-error-card-" + _0x41fc15).append("img", {
                        class: "mtcap-alert-img",
                        id: "mtcap-alert-img-" + _0x41fc15,
                        alt: "alert image",
                        src: constants["asserts"]["alrtImg"]
                    }, "mtcap-alert-" + _0x41fc15)["append"]("div", {
                        class: "mtcap-alert-msg",
                        id: "mtcap-alert-msg-" + _0x41fc15,
                        "aria-live": "assertive",
                        "aria-invalid": "true",
                        tabindex: "0"
                    }, "mtcap-alert-" + _0x41fc15, _0x33a29e["langTxt"]["connectionError"]).append("div", {
                        class: "error-block",
                        id: "error-block-" + _0x41fc15
                    }, "mtcap-alert-" + _0x41fc15).append("span", {
                        class: "error-code",
                        id: "error-code-" + _0x41fc15
                    }, "error-block-" + _0x41fc15)["append"]("input", {
                        class: "mtcap-alert-btn",
                        id: "mtcap-alert-btn-" + _0x41fc15,
                        type: "button",
                        value: "OK"
                    }, "error-block-" + _0x41fc15);
                    var _0x75c060 = document.getElementById("mtcap-image-" + _0x41fc15);
                    constants["util"]["doAnimation"](_0x75c060, "fadein 1s ease-out");
                } catch (_0x155138) {
                    constants["log"]["warn"](_0x33a29e, _0x155138);
                }
            },
            append: function (_0x218bbb, _0x500d65, _0x23c360, _0x10c58e) {
                var _0x57f400 = document.createElement(_0x218bbb);
                var _0x45e940 = document["getElementById"](_0x23c360);
                this.setAttributes(_0x57f400, _0x500d65);
                if (_0x10c58e != undefined) {
                    _0x57f400["innerHTML"] = _0x10c58e;
                }
                _0x45e940["appendChild"](_0x57f400);
                return this;
            },
            setAttributes: function (_0x3d43e7, _0x1544b1) {
                for (var _0x5a8da0 in _0x1544b1) {
                    _0x3d43e7["setAttribute"](_0x5a8da0, _0x1544b1[_0x5a8da0]);
                }
            },
            e: {},
            cacheDOMEle: function (_0x149a71) {
                var _0xa5b2c0 = {
                    audio: document["getElementById"]("mtcap-audioctrlicon-" + _0x149a71["counter"]),
                    audioControl: document["getElementById"]("mtcap-audioctrl-" + _0x149a71.counter),
                    audioControlBG: document["getElementById"]("mtcap-audioctrlbg-" + _0x149a71["counter"]),
                    stsBtn: document["getElementById"]("mtcap-statusbutton-" + _0x149a71["counter"]),
                    stsImg: document["getElementById"]("mtcap-statusimg-" + _0x149a71["counter"]),
                    inputText: document["getElementById"]("mtcap-inputtext-" + _0x149a71["counter"]),
                    main: document["getElementById"]("mtcap-main-" + _0x149a71["counter"]),
                    imageContainer: document.getElementById("mtcap-image-" + _0x149a71["counter"]),
                    noCssImage: document["getElementById"]("mtcap-image-nocss-" + _0x149a71["counter"]),
                    audioContainer: document["getElementById"]("mtcap-audio-" + _0x149a71["counter"]),
                    card: document["getElementById"]("mtcap-card-" + _0x149a71["counter"]),
                    msg: document.getElementById("mtcap-msg-" + _0x149a71["counter"]),
                    inputbox: document["getElementById"]("mtcap-inputbox-" + _0x149a71["counter"]),
                    errCard: document["getElementById"]("mtcap-error-card-" + _0x149a71.counter),
                    alrtbtn: document.getElementById("mtcap-alert-btn-" + _0x149a71["counter"]),
                    ariaAudio: document.getElementById("desc4AudioButton-" + _0x149a71["counter"]),
                    ariaInput: document["getElementById"]("desc4InputText-" + _0x149a71["counter"]),
                    ariaStatus: document["getElementById"]("desc4StatusButton-" + _0x149a71.counter),
                    ariaCaptchaStatus: document["getElementById"]("desc4CaptchaStatus-" + _0x149a71["counter"]),
                    alrtImg: document["getElementById"]("mtcap-alert-img-" + _0x149a71["counter"]),
                    alrtMsg: document["getElementById"]("mtcap-alert-msg-" + _0x149a71["counter"]),
                    alert: document["getElementById"]("mtcap-alert-" + _0x149a71.counter),
                    requireCSS: document["getElementById"]("mtcap-require-css-msg-" + _0x149a71["counter"]),
                    privacyLink: document["getElementById"]("mtcap-msglink-privacy-" + _0x149a71["counter"]),
                    termsLink: document["getElementById"]("mtcap-msglink-terms-" + _0x149a71["counter"]),
                    ampersand: document["getElementById"]("mtcap-ampersand-" + _0x149a71["counter"]),
                    iframe: document.getElementById("mtcaptcha-iframe-" + _0x149a71["counter"]),
                    msgContainer: document["getElementById"]("mtcap-msgbox-" + _0x149a71["counter"]),
                    invalidMsg: document["getElementById"]("mtcap-invalid-msg-" + _0x149a71.counter),
                    errorCode: document.getElementById("error-code-" + _0x149a71["counter"]),
                    stsBox: document["getElementById"]("mtcap-statusbox-" + _0x149a71["counter"])
                };
                if (_0x149a71.widgetSize == constants.constant["mini"]) {
                    delete _0xa5b2c0.alrtbtn;
                    delete _0xa5b2c0["errCard"];
                    delete _0xa5b2c0.alrtImg;
                    delete _0xa5b2c0["alrtMsg"];
                    delete _0xa5b2c0["alert"];
                }
                this.e[_0x149a71["widgetInstance"]] = _0xa5b2c0;
            },
            upateAriaMessage: function (_0x19dc54, _0x4d85e0) { },
            events: {
                bind: function (_0x31c5bc) {
                    var _0x5c3b5d = constants.UI.e[_0x31c5bc["widgetInstance"]];
                    var _0x19c2a8 = _0x5c3b5d["audioControl"];
                    var _0x4bf619 = _0x5c3b5d["inputText"];
                    var _0xca34b1 = _0x5c3b5d["stsBtn"];
                    var _0x977bf = _0x5c3b5d["alrtbtn"];
                    if (_0x19c2a8 != null) {
                        constants["util"].addEvent(_0x19c2a8, ["mouseenter", "focus", "focusin"], function () {
                            _0x31c5bc.isMouseWithinAudioContainer = true;
                            if (_0x31c5bc["challengeType"] != "imageonly") {
                                constants.UI.e[_0x31c5bc["widgetInstance"]]["audio"]["style"]["color"] = _0x31c5bc["widgetSize"] == constants["constant"]["mini"] ? constants.style["miniIconColors"].audiofocus : constants["style"]["iconColors"]["audiofocus"];
                                if (constants.UI.e[_0x31c5bc["widgetInstance"]].audioContainer.src == "") {
                                    constants.UI["events"].audio.update(3);
                                } else {
                                    constants.UI["events"]["audio"]["update"](constants.UI.events["audio"]["status"]);
                                }
                            }
                        });
                        constants["util"]["addEvent"](_0x19c2a8, ["touchend"], function (_0x3d6724) {
                            _0x3d6724["preventDefault"]();
                            constants.UI["events"].toggleAudioCtrl();
                        });
                        constants["util"]["addEvent"](_0x19c2a8, ["click"], constants.UI["events"].toggleAudioCtrl);
                        constants["util"]["addEvent"](_0x19c2a8, ["mouseleave", "focusout"], function () {
                            _0x31c5bc.isMouseWithinAudioContainer = false;
                            if (_0x31c5bc["challengeType"] != "imageonly" && constants.UI.events["audio"]["status"] != 1) {
                                if (_0x31c5bc["widgetSize"] == constants["constant"]["standard"]) {
                                    constants.UI.e[_0x31c5bc["widgetInstance"]].audio["style"]["color"] = constants.style.iconColors["audio"];
                                } else {
                                    constants.UI.e[_0x31c5bc["widgetInstance"]]["audio"].style.color = constants["style"]["miniIconColors"]["audio"];
                                }
                            }
                            if (!constants["util"].isAudioPlay(_0x31c5bc) && !constants["util"]["isAudioContinue"](_0x31c5bc) && !constants.UI.e[_0x31c5bc["widgetInstance"]].audioContainer["src"] == "") {
                                return;
                            } else if (!_0x31c5bc["audioTimer"]) {
                                constants.UI.events["audio"].update(0);
                                constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 0);
                            }
                        });
                    }
                    constants["util"]["addEvent"](_0x4bf619, ["focusout"], function (_0x1d4520) {
                        if (typeof _0x39f824 != "undefined" && _0x39f824 != "" && this["value"] == "") {
                            this.value = this.getAttribute("placeholder");
                        }
                        if (constants["util"]["canSolveChallenge"]()) {
                            constants["api"]["request"]["solvechallenge"](_0x1d4520, _0x31c5bc["widgetInstance"]);
                        }
                        if (_0x31c5bc["sCode"] != constants["status"]["code"].general["CAP_VERIFIED"]) {
                            constants.UI["events"]["status"].showStatusMsg(_0x31c5bc, 0);
                        }
                    });
                    constants["util"]["addEvent"](_0x4bf619, "focusin", function (_0x58a3e1) {
                        var _0x3770c = this;
                        setTimeout(function () {
                            _0x3770c["selectionStart"] = _0x3770c["selectionEnd"];
                        }, 1);
                        constants["util"]["removePlaceholderText"]();
                        _0x31c5bc["autoReloadCnt"] = 0;
                        if (_0x31c5bc["sCode"] == constants["status"]["code"]["general"]["CAP_EXPIRED"] || _0x31c5bc.sCode == constants["status"]["code"].general["CAP_VERIFIED_TOKEN_EXPIRED"]) {
                            constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 0);
                            constants["render"]["reset"](_0x31c5bc["widgetInstance"]);
                            return;
                        } else if (_0x31c5bc["sCode"] == constants["status"]["code"]["general"]["CAP_VERIFIED"]) {
                            return;
                        } else if (_0x31c5bc["widgetSize"] == constants["constant"]["mini"]) {
                            constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 1, _0x31c5bc["langTxt"]["enterTextMsg"]);
                        } else {
                            constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 0);
                        }
                    });
                    constants["util"]["addEvent"](_0x4bf619, "input", function (_0x1c97d4) {
                        constants.UI["events"].inputKeyPress(_0x4bf619, _0x1c97d4);
                        constants["kee"].play(_0x4bf619);
                    });
                    constants["util"]["addEvent"](_0x4bf619, "keyup", constants.UI["events"].inputKeyup);
                    constants["util"]["addEvent"](_0x4bf619, "keydown", constants.UI["events"]["inputKeyDown"]);
                    constants["util"]["addEvent"](_0xca34b1, "mousedown", function (_0x328902) {
                        if (constants.UI.events.isCaptchaFieldsDisabled(_0x328902)) {
                            return;
                        }
                        constants.UI["events"].status["showStatusPressed"](_0x31c5bc, true, constants.UI.e[_0x31c5bc["widgetInstance"]].stsImg);
                    });
                    constants["util"]["addEvent"](_0xca34b1, "mouseup", function (_0x5d0a65) {
                        if (constants.UI["events"]["isCaptchaFieldsDisabled"](_0x5d0a65)) {
                            return;
                        }
                        constants.UI["events"]["status"].showStatusPressed(_0x31c5bc, false, constants.UI.e[_0x31c5bc.widgetInstance]["stsImg"]);
                    });
                    constants["util"].addEvent(_0xca34b1, "mouseleave", function (_0x542cdd) {
                        if (constants.UI["events"]["isCaptchaFieldsDisabled"](_0x542cdd)) {
                            return;
                        }
                        constants.UI["events"].status["showStatusPressed"](_0x31c5bc, false, constants.UI.e[_0x31c5bc.widgetInstance]["stsImg"]);
                    });
                    constants["util"].addEvent(_0xca34b1, ["mouseenter", "focus"], function (_0x7a120c) {
                        if (constants.UI["events"].isCaptchaFieldsDisabled(_0x7a120c) || constants["status"]["getInternalStatus"]() == constants["status"]["code"].internal.ERROR) {
                            return;
                        }
                        constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 1, _0x31c5bc["langTxt"]["captchaRefresh"]);
                    });
                    constants["util"].addEvent(_0xca34b1, ["mouseleave", "focusout"], function (_0x252b17) {
                        if (constants.UI["events"]["isCaptchaFieldsDisabled"](_0x252b17)) {
                            return;
                        }
                        if (_0x31c5bc.incompleteSol == true) {
                            constants.UI["events"]["status"]["showIncomplete"](_0x31c5bc);
                        } else {
                            constants.UI["events"]["status"]["showStatusMsg"](_0x31c5bc, 0);
                        }
                    });
                    constants["util"]["addEvent"](_0xca34b1, "click", constants.UI["events"]["toggleStatusImg"]);
                    constants["util"].addEvent(_0xca34b1, "touchend", function (_0x471b4f) {
                        _0x471b4f["preventDefault"]();
                        constants.UI["events"]["toggleStatusImg"]();
                    });
                    if (_0x31c5bc.widgetSize == constants.constant.standard) {
                        constants["util"].addEvent(_0x977bf, "click", function () {
                            constants["render"]["reset"](_0x31c5bc["widgetInstance"]);
                            constants["widget"]["online"](_0x31c5bc["widgetInstance"]);
                        });
                    }
                },
                isCaptchaFieldsDisabled: function (_0x15b3e3) {
                    var _0x489bcc = constants.status["internalStatus"];
                    var _0x58942f = constants.status["code"]["internal"];
                    if (_0x489bcc == _0x58942f["RELOADING_NEW"] || _0x489bcc == _0x58942f["LOADING_NEW"] || _0x489bcc == _0x58942f["VALIDATION_SUCCESS"]) {
                        if (_0x15b3e3) {
                            _0x15b3e3["preventDefault"]();
                        }
                        return true;
                    }
                    return false;
                },
                isInputFieldDisabled: function (_0x1cedf1) {
                    var _0x174b44 = constants.status["internalStatus"];
                    var _0x2c2371 = constants.status["code"].internal;
                    if (_0x174b44 != _0x2c2371["LOADING_NEW"] && _0x174b44 != _0x2c2371["CAPTCHA_LOADED"] && _0x174b44 != _0x2c2371["CAPTCHA_NEWLY_LOADED"] && _0x174b44 != _0x2c2371["AUDIO_DOWNLOADING"] && _0x174b44 != _0x2c2371["AUDIO_PLAYING"] && _0x174b44 != _0x2c2371["CAPTCHA_SOLUTION_INCOMPLETE"]) {
                        if (_0x1cedf1 && _0x1cedf1["keyCode"] != 9) {
                            _0x1cedf1["preventDefault"]();
                        }
                        return true;
                    }
                    return false;
                },
                inputKeyDown: function (_0x3e8180) {
                    if (constants.UI.events["isInputFieldDisabled"](_0x3e8180)) {
                        return;
                    }
                    constants["util"]["removePlaceholderText"]();
                },
                inputKeyup: function (_0x136576) {
                    if (constants.UI["events"]["isInputFieldDisabled"](_0x136576)) {
                        return;
                    }
                    constants["util"].removePlaceholderText();
                    this.value = this["value"]["replace"](/[^a-z0-9$]/gi, "");
                    var _0x1d6e64 = typeof _0x136576["which"] == "number" ? _0x136576["which"] : _0x136576.keyCode;
                    if (_0x1d6e64 == 44 || _0x1d6e64 == 63 || _0x1d6e64 == 188 || _0x1d6e64 == 9) {
                        return;
                    }
                    constants.UI["events"]["status"].showStatusMsg(_0x33a29e, 0);
                    clearTimeout(_0x33a29e.completeTimer);
                    clearTimeout(_0x33a29e["validateTimer"]);
                    if (this["value"]["length"] >= _0x33a29e["anslen"]) {
                        constants.kee.tf.onkeydown = null;
                        constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"]["removeEventListener"]("keyup", constants.UI.events["inputKeyup"]);
                        if (_0x33a29e["isVerifying"] !== true) {
                            constants["api"]["request"]["solvechallenge"](_0x136576, _0x33a29e.widgetInstance);
                        }
                    } else if (this["value"]["length"] < _0x33a29e["anslen"]) {
                        if (_0x136576["keyCode"] == 13) {
                            constants["status"]["setStatus"](constants["status"].code.internal["CAPTCHA_SOLUTION_INCOMPLETE"]);
                        }
                        _0x33a29e["validateTimer"] = setTimeout(function () {
                            _0x33a29e["incompleteSol"] = true;
                            constants["status"]["setStatus"](constants["status"]["code"]["internal"]["CAPTCHA_SOLUTION_INCOMPLETE"]);
                        }, 5000);
                    }
                },
                inputKeyPress: function (_0x3f6e0a, _0x32948a) {
                    if (constants.UI["events"]["isInputFieldDisabled"](_0x32948a)) {
                        return;
                    }
                    constants["util"]["removePlaceholderText"]();
                    var _0x2c3b00 = false;
                    var _0x2189de = false;
                    if (_0x3f6e0a["value"]["indexOf"](",") >= 0) {
                        _0x2c3b00 = true;
                    }
                    if (_0x3f6e0a["value"]["indexOf"]("?") >= 0) {
                        _0x2189de = true;
                    }
                    if (_0x2c3b00) {
                        _0x32948a["preventDefault"]();
                        var _0xb83cef = Date.now();
                        if (_0xb83cef > _0x5489f2 + 800) {
                            _0x5489f2 = _0xb83cef;
                            setTimeout(function () {
                                constants.UI.events["toggleAudioCtrl"]();
                            }, 700);
                        }
                    } else if (_0x2189de) {
                        _0x32948a["preventDefault"]();
                        var _0xb83cef = Date["now"]();
                        if (_0xb83cef > _0x2ca197 + 1000) {
                            _0x2ca197 = _0xb83cef;
                            constants.UI.events.toggleStatusImg();
                        }
                    }
                },
                toggleAudioCtrl: function () {
                    if (_0x33a29e["challengeType"] != "imageonly") {
                        var _0x5bec0c = constants.UI.e[_0x33a29e["widgetInstance"]]["audioContainer"];
                        if (navigator["maxTouchPoints"] || "ontouchstart" in document["documentElement"]) {
                            if (_0x33a29e.widgetSize == constants["constant"]["standard"]) {
                                constants.util["showTouchRippleAtPos"](-12, -12, _0x33a29e);
                            } else {
                                var _0x5f4314 = constants.UI.e[_0x33a29e["widgetInstance"]].inputbox;
                                var _0x1aa72e = _0x5f4314["scrollWidth"];
                                constants["util"].showTouchRippleAtPos(_0x1aa72e, 1, _0x33a29e);
                            }
                        }
                        if (_0x5bec0c["src"] == "") {
                            constants["status"]["setStatus"](constants["status"]["code"].internal.AUDIO_DOWNLOADING);
                            _0x326741 = true;
                            constants["api"].request["getAudio"](_0x33a29e);
                            constants["status"].setStatus(constants["status"]["code"]["internal"]["CAPTCHA_LOADED"]);
                        } else {
                            constants.UI["events"]["audio"]["play"](_0x33a29e);
                            constants.UI["events"]["audio"]["update"](constants.UI["events"]["audio"].status);
                        }
                    }
                },
                toggleStatusImg: function () {
                    if (constants.UI["events"]["isCaptchaFieldsDisabled"]()) {
                        return;
                    }
                    if (navigator["maxTouchPoints"] || "ontouchstart" in document["documentElement"]) {
                        var _0x5f33a8 = document["getElementById"]("mtcap-card-" + _0x33a29e["counter"]);
                        var _0x46d793 = _0x5f33a8["scrollWidth"] - 50;
                        constants["util"].showTouchRippleAtPos(_0x46d793, 78, _0x33a29e);
                    }
                    _0x3d0c7c = true;
                    _0x4996ca = document.createElement("input");
                    constants.UI["setAttributes"](_0x4996ca, {
                        type: "text",
                        "aria-hidden": "true",
                        readonly: "true",
                        style: "border: 0; position: absolute; opacity : 0; height : 0; font-size: 16px;"
                    });
                    document.body["appendChild"](_0x4996ca);
                    _0x4996ca["focus"]();
                    constants["render"].reset(_0x33a29e["widgetInstance"]);
                },
                audio: {
                    status: 0,
                    play: function (_0x3caf08) {
                        var _0x3a8bd0 = constants.UI.e[_0x3caf08.widgetInstance]["audioContainer"];
                        var _0x39ba93 = constants.UI.events;
                        var _0x4dd93c = _0x3a8bd0["duration"] * 1000;
                        var _0x12ec6b;
                        if (_0x3a8bd0["paused"] && constants["status"]["getInternalStatus"]() != constants.status.code["internal"]["VERIFIYING_INPUT"] && constants["status"]["getInternalStatus"]() != constants["status"].code["internal"].VALIDATION_SUCCESS) {
                            _0x3a8bd0["play"]();
                            constants["status"].setStatus(constants["status"]["code"]["internal"].AUDIO_PLAYING);
                            _0x39ba93.audio["update"](1);
                            _0x39ba93["audio"]["status"] = 1;
                            setTimeout(function checkAudEnded() {
                                clearTimeout(_0x12ec6b);
                                if (constants.status["getInternalStatus"]() == constants["status"].code["internal"]["VERIFIYING_INPUT"] || constants.status["getInternalStatus"]() == constants["status"]["code"]["internal"]["VALIDATION_SUCCESS"]) {
                                    constants.UI["events"]["audio"]["stop"](_0x3caf08);
                                } else if (_0x3a8bd0["ended"]) {
                                    _0x39ba93["audio"].status = 0;
                                    if (_0x3caf08.isMouseWithinAudioContainer && _0x3caf08.challengeType != "imageonly") {
                                        _0x39ba93["audio"].update(_0x39ba93["audio"]["status"]);
                                    } else {
                                        _0x39ba93["audio"]["toggleImg"](_0x3caf08, false, 0);
                                        _0x39ba93["status"].showStatusMsg(_0x3caf08, 0);
                                        constants.UI.e[_0x3caf08["widgetInstance"]]["audio"]["style"].color = constants.style["iconColors"].audio;
                                    }
                                } else {
                                    _0x12ec6b = setTimeout(checkAudEnded, 1000);
                                }
                            }, _0x4dd93c);
                        } else {
                            _0x3a8bd0.pause();
                            _0x39ba93["audio"]["status"] = 2;
                        }
                    },
                    stop: function (_0x4f0075) {
                        var _0x594b35 = constants.UI.e[_0x4f0075.widgetInstance]["audioContainer"];
                        var _0x3e78f2 = constants.UI["events"];
                        if (!_0x594b35["paused"]) {
                            _0x594b35["pause"]();
                            _0x3e78f2["audio"]["status"] = 2;
                        }
                    },
                    update: function (_0x193bcc) {
                        var _0x12f060 = constants.UI["events"]["audio"];
                        var _0x2de8e7 = constants.UI.events.status;
                        switch (_0x193bcc) {
                            case 1:
                                _0x12f060["toggleImg"](_0x33a29e, false, 1);
                                _0x2de8e7["showStatusMsg"](_0x33a29e, 1, _0x33a29e.langTxt.audioPlaying);
                                break;
                            case 2:
                                _0x12f060["toggleImg"](_0x33a29e, false, 0);
                                _0x2de8e7["showStatusMsg"](_0x33a29e, 1, _0x33a29e["langTxt"]["continueAudio"]);
                                break;
                            case 3:
                                _0x12f060["toggleImg"](_0x33a29e, false, 2);
                                _0x2de8e7["showStatusMsg"](_0x33a29e, 1, _0x33a29e["langTxt"]["downloadAudio"]);
                                break;
                            case 4:
                                _0x12f060["toggleImg"](_0x33a29e, false, 3);
                                _0x2de8e7.showStatusMsg(_0x33a29e, 1, _0x33a29e["langTxt"]["audioDownloading"]);
                                break;
                            default:
                                _0x12f060["toggleImg"](_0x33a29e, false, 0);
                                _0x2de8e7["showStatusMsg"](_0x33a29e, 1, _0x33a29e.langTxt["audioPlay"]);
                                break;
                        }
                    },
                    toggleImg: function (_0x75c1d9, _0x36130e, _0x1fd1ad) {
                        var _0x2cf4fc = constants.UI.e[_0x75c1d9["widgetInstance"]].audio;
                        var _0x1bc321 = "";
                        var _0x2c02b0 = 0;
                        var _0x301bb9 = constants.UI["events"]["audio"];
                        _0x36130e = _0x36130e || false;
                        if (_0x36130e || _0x1fd1ad > 4) {
                            _0x1fd1ad = 0;
                        }
                        if (!document["createElement"]("audio")["canPlayType"] && _0x1fd1ad == 1) {
                            _0x1fd1ad = 3;
                        }
                        switch (_0x1fd1ad) {
                            case 0:
                                _0x1bc321 = "";
                                break;
                            case 1:
                                _0x1bc321 = ["", "", ""];
                                _0x2c02b0 = 400;
                                break;
                            case 2:
                                _0x1bc321 = ["", "", ""];
                                _0x2c02b0 = 400;
                                break;
                            case 3:
                                _0x1bc321 = ["", "", ""];
                                _0x2c02b0 = 300;
                                break;
                        }
                        if (_0x1fd1ad === 0) {
                            _0x301bb9["clearRotateChars"](_0x75c1d9);
                            _0x2cf4fc["value"] = _0x1bc321;
                        } else {
                            _0x301bb9["rotateChars"](_0x2cf4fc, _0x1bc321, _0x2c02b0, _0x75c1d9);
                        }
                    },
                    rotateChars: function (_0x2a9f42, _0x5a1e50, _0x3e9606, _0x353b13) {
                        var _0x288ebf = constants.UI["events"]["audio"];
                        if (_0x353b13["rotateCharIntv"]) {
                            clearInterval(_0x353b13, _0x353b13["rotateCharIntv"]);
                        }
                        if (!_0x353b13.rotateCharObj) {
                            _0x353b13["rotateCharObj"] = {};
                        }
                        _0x353b13.rotateCharObj["dom"] = _0x2a9f42;
                        _0x353b13["rotateCharObj"].chars = _0x5a1e50;
                        _0x353b13["rotateCharObj"]["startTS"] = Date["now"]();
                        _0x353b13["rotateCharObj"]["intvMS"] = _0x3e9606;
                        _0x353b13["rotateCharObj"].pos = 0;
                        _0x288ebf.doCharsRotate(_0x353b13);
                        _0x353b13["rotateCharIntv"] = setInterval(function () {
                            _0x288ebf["doCharsRotate"](_0x353b13);
                        }, _0x3e9606 / 2);
                    },
                    clearRotateChars: function (_0x2d45a8, _0x2b2683) {
                        if (_0x2d45a8["rotateCharIntv"]) {
                            clearInterval(_0x2d45a8["rotateCharIntv"]);
                        }
                        if (_0x2d45a8["rotateCharObj"]) {
                            var _0x38bee0 = _0x2d45a8["rotateCharObj"]["dom"];
                            _0x2d45a8["rotateCharObj"].dom = null;
                            if (_0x38bee0 && _0x2b2683) {
                                _0x38bee0["value"] = _0x2b2683;
                            }
                        }
                    },
                    doCharsRotate: function (_0x4f6df2) {
                        if (!_0x4f6df2["rotateCharObj"] || !_0x4f6df2["rotateCharObj"]["dom"]) {
                            return;
                        }
                        var _0x48eedb = Math["floor"](Date["now"]() / _0x4f6df2["rotateCharObj"]["intvMS"]) % _0x4f6df2["rotateCharObj"]["chars"]["length"];
                        if (_0x4f6df2.rotateCharObj.pos != _0x48eedb) {
                            _0x4f6df2["rotateCharObj"]["pos"] = _0x48eedb;
                            _0x4f6df2["rotateCharObj"]["dom"]["value"] = decodeURI(_0x4f6df2["rotateCharObj"].chars[_0x48eedb]);
                        }
                    },
                    showAudioCtrl: function (_0x15e26d) {
                        var _0x205414 = constants.UI.e[_0x15e26d.widgetInstance];
                        _0x205414["audioControl"]["style"]["visibility"] = "visible";
                        _0x205414["audio"].style["visibility"] = "visible";
                        _0x576d89 = setInterval(_0x247157, 1000);
                    },
                    hideAudioCtrl: function (_0x4cfaba) {
                        if (_0x576d89) {
                            clearInterval(_0x576d89);
                        }
                        var _0x2bf461 = constants.UI.e[_0x4cfaba["widgetInstance"]];
                        _0x2bf461.audioControl["style"]["visibility"] = "hidden";
                        _0x2bf461["audio"]["style"]["visibility"] = "hidden";
                    }
                },
                status: {
                    showRequired: function (_0x4a6beb, _0x2a1468) {
                        var _0x589292 = constants.UI.e[_0x4a6beb["widgetInstance"]];
                        if (_0x2a1468) {
                            if (_0x4a6beb.isShowingRequired) {
                                return;
                            }
                            _0x4a6beb["isShowingRequired"] = true;
                            if (_0x4a6beb["widgetSize"] == constants["constant"]["mini"]) {
                                _0x589292["card"]["style"]["borderColor"] = "#FF5151";
                                _0x589292["imageContainer"]["style"].borderColor = "#FF5151";
                                _0x589292["inputbox"]["style"]["borderColor"] = "#FF5151";
                                _0x589292["stsBox"]["style"]["borderColor"] = "#FF5151";
                                if (_0x4a6beb["challengeType"] != "imageonly") {
                                    _0x589292.audioControl["style"]["borderColor"] = "#FF5151";
                                }
                            } else {
                                _0x589292.card["style"]["boxShadow"] = "0px 0px 0px 2px red";
                            }
                        } else {
                            if (!_0x4a6beb.isShowingRequired) {
                                return;
                            }
                            _0x4a6beb["isShowingRequired"] = false;
                            if (_0x4a6beb["widgetSize"] == constants["constant"]["mini"]) {
                                _0x589292["card"]["style"].borderColor = "";
                                _0x589292.inputbox["style"]["borderColor"] = "";
                                _0x589292["imageContainer"]["style"].borderColor = "";
                                _0x589292.stsBox["style"]["borderColor"] = "";
                                if (_0x4a6beb["challengeType"] != "imageonly") {
                                    _0x589292["audioControl"]["style"]["borderColor"] = "";
                                }
                                if (constants.miniTheme["hasOwnProperty"](_0x4a6beb["theme"]) || _0x4a6beb["customStyle"]) {
                                    constants["style"].apply(_0x4a6beb);
                                } else {
                                    constants.style.set(_0x4a6beb, constants.style["miniDefaults"]);
                                }
                            } else {
                                _0x589292.card["style"]["boxShadow"] = "";
                            }
                        }
                    },
                    showStatusMsg: function (_0x14a634, _0x24bc70, _0x43de37) {
                        constants.UI["events"]["status"]["toggleMsg"](_0x14a634, _0x24bc70, _0x43de37);
                    },
                    showIncomplete: function (_0x3dc4a6) {
                        var _0x29a188 = constants.UI.e[_0x3dc4a6["widgetInstance"]]["inputText"]["value"]["length"];
                        if (_0x29a188 == 0) {
                            constants.UI["events"].status["showStatusMsg"](_0x3dc4a6, 2, _0x3dc4a6["langTxt"]["emptyCaptcha"]);
                        } else {
                            constants.UI.events.status["showStatusMsg"](_0x3dc4a6, 2, _0x3dc4a6.langTxt.incompleteCaptcha);
                        }
                    },
                    showStatusPressed: function (_0x151f95, _0xca64ec, _0x4cb7fc) {
                        if (_0x151f95.prevStatusPressed == _0xca64ec) {
                            return;
                        }
                        _0x151f95["prevStatusPressed"] = _0xca64ec;
                        var _0x10dc48 = "";
                        if (_0xca64ec) {
                            _0x10dc48 = "scale(0.8)";
                        } else { }
                        _0x4cb7fc.style["transform"] = _0x10dc48;
                    },
                    toggleMsg: function (_0x3a88e9, _0x5463b9, _0x50b551) {
                        var _0x3965a1 = constants.UI.e[_0x3a88e9["widgetInstance"]].msg;
                        if (_0x3a88e9["prevStatusMsg"] == _0x50b551) {
                            return;
                        }
                        if (_0x5463b9 > 3) {
                            _0x5463b9 = 0;
                        }
                        _0x3a88e9["prevStatusMsg"] = _0x50b551;
                        _0x3a88e9["msgNo"] = _0x5463b9;
                        _0x3965a1.innerHTML = "";
                        switch (_0x5463b9) {
                            case 0:
                                if (_0x3a88e9["widgetSize"] == constants["constant"].mini) {
                                    if (!_0x3a88e9["isMTCPowByDisabled"] && !_0x3a88e9["isMTCLinksDisabled"]) {
                                        _0x3965a1["innerHTML"] += "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-powered-by-" + _0x3a88e9["counter"] + "'aria-label='" + _0x3a88e9["ariaTxt"].default["poweredByLink"] + "'href=\"https://www.mtcaptcha.com\" target=\"_blank\" tabindex=\"0\">" + _0x3a88e9["langTxt"]["miniByMT"] + "</a><span class=\"mini-dot\"> . </span>";
                                    } else if (!_0x3a88e9["isMTCPowByDisabled"] && _0x3a88e9["isMTCLinksDisabled"]) {
                                        _0x3965a1["innerHTML"] += "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-powered-by-" + _0x3a88e9.counter + "'aria-label='" + _0x3a88e9["ariaTxt"]["default"]["poweredByLink"] + "'href=\"https://www.mtcaptcha.com\" target=\"_blank\" tabindex=\"0\">" + _0x3a88e9["langTxt"]["miniByMT"] + "</a>";
                                    }
                                    if (!_0x3a88e9["isMTCLinksDisabled"]) {
                                        _0x3965a1["innerHTML"] += "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-privacy-" + _0x3a88e9.counter + "' aria-label='" + _0x3a88e9["ariaTxt"]["default"].privacyLink + "'href=\"https://www.mtcaptcha.com/legal-privacy-captcha\" tabindex:\"0\" target=\"_blank\" role:\"link\">" + _0x3a88e9["langTxt"]["privacy"] + "</a><span class=\"mini-dot\"> . </span>" + "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-terms-" + _0x3a88e9["counter"] + "'aria-label='" + _0x3a88e9["ariaTxt"].default["termsLink"] + "' href=\"https://www.mtcaptcha.com/legal-terms\" tabindex:\"0\" target=\"_blank\" role:\"link\">" + _0x3a88e9["langTxt"]["terms"] + "</a>";
                                    }
                                } else if (!_0x3a88e9.isMTCPowByDisabled) {
                                    _0x3965a1["innerHTML"] += "<a class=\"mtcap-msglink-active mtcap-msglink-custom\" id = 'mtcap-msglink-powered-by-" + _0x3a88e9["counter"] + "' aria-label='" + _0x3a88e9["ariaTxt"]["default"]["poweredByLink"] + "' href=\"https://www.mtcaptcha.com\" target=\"_blank\" tabindex:\"0\">" + _0x3a88e9["langTxt"]["byMT"] + "</a>";
                                }
                                break;
                            case 1:
                                _0x3965a1["innerHTML"] = "<p>" + _0x50b551 + "</p>";
                                break;
                            case 2:
                                _0x3965a1["innerHTML"] = "<p class='mtcap-invalidmsg mtcap-invalidmsg-custom' id='mtcap-invalid-msg-" + _0x3a88e9.counter + "'  aria-invalid='true' tabindex='0'>" + _0x50b551 + "</p>";
                                break;
                        }
                        constants["util"]["widgetHeightChange"](_0x3a88e9);
                        constants["util"]["doAnimation"](_0x3965a1, "fadein 260ms ease");
                    },
                    rotateImg: function (_0x570c26) {
                        var _0x27ec48 = constants.UI.e[_0x33a29e["widgetInstance"]]["stsImg"];
                        if (_0x570c26) {
                            constants.util["doAnimation"](_0x27ec48, "rotate 650ms linear infinite");
                        } else {
                            constants["util"]["doAnimation"](_0x27ec48, "none");
                        }
                    },
                    toggleImg: function (_0x55f530, _0x2ae3b8) {
                        var _0x28c02e = constants.UI.e[_0x55f530.widgetInstance];
                        var _0x3aae18 = _0x28c02e["stsImg"];
                        var _0x455991 = _0x55f530["widgetSize"];
                        var _0x53ee8c;
                        if (_0x455991 == constants["constant"]["mini"]) {
                            _0x53ee8c = constants.style.miniIconColors;
                        } else {
                            _0x53ee8c = constants.style["iconColors"];
                        }
                        if (_0x2ae3b8 > 4) {
                            _0x2ae3b8 = 0;
                        }
                        switch (_0x2ae3b8) {
                            case 0:
                                _0x3aae18.value = String["fromCharCode"](59648);
                                _0x3aae18["style"]["color"] = _0x53ee8c.refresh;
                                break;
                            case 1:
                                _0x3aae18["value"] = String["fromCharCode"](59649);
                                _0x3aae18.style["color"] = _0x53ee8c["verify"];
                                break;
                            case 2:
                                _0x3aae18.value = String["fromCharCode"](59650);
                                _0x3aae18["style"]["color"] = _0x53ee8c["success"];
                                break;
                            case 3:
                                _0x3aae18["value"] = String.fromCharCode(59651);
                                _0x3aae18["style"].color = _0x53ee8c["fail"];
                                break;
                            case 4:
                                _0x3aae18["value"] = String["fromCharCode"](59648);
                                _0x3aae18["style"].color = _0x53ee8c["verify"];
                                break;
                        }
                        if (_0x2ae3b8 === 2) {
                            constants["util"]["doAnimation"](_0x3aae18, "fadeinbounce 350ms ease");
                            _0x28c02e["stsBtn"]["tabIndex"] = -1;
                            _0x28c02e["stsBtn"]["setAttribute"]("aria-hidden", "true");
                        } else {
                            constants["util"]["doAnimation"](_0x3aae18, "fadein 350ms ease");
                            _0x28c02e["stsBtn"]["tabIndex"] = 0;
                            _0x28c02e.stsBtn["removeAttribute"]("aria-hidden");
                        }
                    }
                }
            }
        },
        render: {
            doCustomRender: function (_0x2358ac) {
                _0x2358ac["renderDelayTimer"] = setTimeout(function () {
                    constants.render["renderWidgetOnTimeout"](_0x2358ac);
                }, 1200);
                constants["postMessage"](_0x2358ac, "waitConfigCustom", {});
            },
            doRender: function (_0x4a82ea) {
                _0x4a82ea.autoReloadCnt = 0;
                _0x4a82ea["initialLoad"] = true;
                _0x39f824 = constants["util"]["getIEVersion"]();
                constants["config"]["setConfigForSummary"](_0x4a82ea);
                constants.jsBuildVersion["setInCookie"](constants.jsBuildVersion["num"]);
                _0x4a82ea["sessionID"] = "S" + _0x4a82ea.counter + constants.util["generateSessionGUID"]();
                _0x4a82ea["action"] = constants.config["validateAndSetAction"](_0x4a82ea);
                constants["api"]["request"].getCT(_0x4a82ea);
            },
            renderWidgetOnTimeout: function (_0x4ae252) {
                _0x4ae252["renderDelayTimer"] = null;
                constants["log"].warn(_0x4ae252, "Couldn’t get Custom Config in time - Rendering with defaults");
                this["doRender"](_0x4ae252);
            },
            reset: function (_0x1cc770) {
                var _0x38421a = constants["util"]["getObject"](_0x1cc770);
                _0x38421a["isVerifying"] = false;
                if (!_0x38421a["isLowFriction"]) {
                    _0x38421a.lf = 0;
                    if (_0x38421a["challengeType"] != "imageonly") {
                        constants["widget"]["load"](_0x38421a, true);
                        constants.UI.e[_0x1cc770]["audioContainer"]["removeAttribute"]("src");
                        constants.UI["events"]["status"].showRequired(_0x38421a, false);
                    }
                }
                this["resetProp"](_0x38421a);
                if (!_0x465276) {
                    _0x38421a["initialLoad"] = false;
                } else {
                    _0x465276 = false;
                    _0x38421a["initialLoad"] = true;
                }
                constants.api["request"]["getCT"](_0x38421a);
                _0x38421a["sCode"] = constants["status"].code["general"]["CAP_NOT_VERIFIED"];
                constants["postMessage"](_0x38421a, "verifystatuschange", {
                    msg: constants["status"]["messages"][constants["status"]["code"]["general"]["CAP_NOT_VERIFIED"]]
                });
            },
            resetProp: function (_76057c) {
                clearTimeout(_76057c["challengeExpireTimer"]);
                clearTimeout(_76057c["resetTimer"]);
                clearTimeout(_76057c["successTokenExpireTimer"]);
                clearTimeout(_76057c["completeTimer"]);
                delete _76057c.ct;
                delete _76057c.image;
                delete _76057c.audio;
                delete _76057c["status"];
                delete _76057c["anslen"];
                delete _76057c["verifiedToken"];
                delete _76057c["incompleteSol"];
            }
        }
    };
    var objects = {};
    var _0xfd277a = "";
    var _0x2048b2;
    var _0x39f824;
    var _0x23f64f = "";
    var _0x172f59 = "0px";
    var _0x5489f2 = 0;
    var _0x2ca197 = 0;
    var _0x211fa3 = 0;
    var _0x3d0c7c = false;
    var _0x1feb4e = false;
    var _0x2722a3 = false;
    var _0x10a05d = false;
    var _0x576d89;
    var _0x744bea = 19;
    var _0x137b6b = 14;
    var _0x219534 = 18;
    var _0xbda126 = 0;
    var _0x326741 = false;
    var _0x4996ca;
    var _0x465276 = false;
    var _0x1cad37 = 0;
    var _0x4a64f7 = new Date()["getTime"]();
    constants["kee"] = {};
    constants["autoPlay"] = false;
    constants["constant"] = {
        standard: "standard",
        mini: "mini",
        defaultMiniHeight: 45,
        minMiniHeight: 42,
        maxMiniHeight: 55,
        minMiniWidth: 265,
        maxMiniWidth: 600,
        minTextFieldWidth: 95,
        miniMaxBorderWidth: 5,
        miniMinBorderWidth: 1
    };
    constants["messages"] = {
        lang: {
            en: {
                inputPrompt: "Enter text from image",
                loading: "loading",
                reload: "reloading...",
                verifying: "validating...",
                verifyFail: "Please try again..",
                verifySuccess: "Verified Successfully",
                captchaExpired: "Challenge expired, please start again",
                verifyExpired: "Challenge expired, click to refresh",
                emptyCaptcha: "Please complete the challenge",
                incompleteCaptcha: "Characters missing, please complete...",
                audioPlay: "Click to play audio challenge",
                audioPlaying: "Playing audio...",
                continueAudio: "Click to continue audio playback",
                downloadAudio: "Click to download the audio challenge",
                audioDownloading: "Downloading audio...",
                connectionError: "Failed to reach web service, Please check your internet connection and try again",
                miniConnectionError: "Failed to connect to the internet, Please try again",
                captchaRefresh: "Get new challenge",
                privacy: "Privacy",
                terms: "Terms",
                byMT: "Powered by MTCaptcha&trade;"
            },
            fr: {
                inputPrompt: "Entrer le texte de l'image",
                loading: "chargement",
                reload: "rechargement ...",
                verifying: "en validant ...",
                verifyFail: "Veuillez réessayer..",
                verifySuccess: "Vérifié avec succès",
                verifyExpired: "Défi expiré, cliquez pour actualiser",
                captchaExpired: "Défi expiré, veuillez recommencer",
                emptyCaptcha: "S'il vous plaît compléter le défi",
                incompleteCaptcha: "Caractères manquants, veuillez compléter ...",
                audioPlay: "Cliquez pour jouer au défi audio",
                audioPlaying: "Lecture audio ...",
                continueAudio: "Cliquez pour continuer la lecture audio",
                downloadAudio: "Cliquez pour télécharger le défi audio",
                audioDownloading: "Téléchargement audio ...",
                connectionError: "Échec de l'accès au service Web. Vérifiez votre connexion Internet et réessayez.",
                captchaRefresh: "Obtenir un nouveau défi",
                privacy: "Confidentialité",
                terms: "Conditions",
                byMT: "Propulsé par MTCaptcha&trade;"
            },
            es: {
                inputPrompt: "Ingrese el texto de la imagen",
                loading: "cargando",
                reload: "recargando ...",
                verifying: "validando ...",
                verifyFail: "Inténtalo de nuevo..",
                verifySuccess: "Verificado con éxito",
                verifyExpired: "Desafío expirado, haga clic para actualizar",
                captchaExpired: "El desafío expiró, por favor comience nuevamente",
                emptyCaptcha: "Por favor completa el desafío",
                incompleteCaptcha: "Faltan caracteres, por favor complete ...",
                audioPlay: "Haz clic para reproducir el desafío de audio",
                audioPlaying: "Reproduciendo audio ...",
                continueAudio: "Haga clic para continuar la reproducción de audio.",
                downloadAudio: "Haga clic para descargar el desafío de audio",
                audioDownloading: "Descargando audio ...",
                connectionError: "No se pudo acceder al servicio web. Comprueba tu conexión a Internet y vuelve a intentarlo.",
                captchaRefresh: "Consigue un nuevo desafío",
                privacy: "Intimidad",
                terms: "Condiciones",
                byMT: "Desarrollado por MTCaptcha&trade;"
            },
            it: {
                inputPrompt: "Inserisci il testo dall'immagine",
                loading: "Caricamento in corso",
                reload: "ricaricare ...",
                verifying: "convalidare ...",
                verifyFail: "Per favore riprova ..",
                verifySuccess: "Verificato con successo",
                verifyExpired: "Sfida scaduta, fai clic per aggiornare",
                captchaExpired: "Sfida scaduta, ricominciare",
                emptyCaptcha: "Per favore completa la sfida",
                incompleteCaptcha: "Caratteri mancanti, per favore completa ...",
                audioPlay: "Fai clic per riprodurre la sfida audio",
                audioPlaying: "Riproduzione audio ...",
                continueAudio: "Fare clic per continuare la riproduzione audio",
                downloadAudio: "Fai clic per scaricare la sfida audio",
                audioDownloading: "Download audio ...",
                connectionError: "Impossibile raggiungere il servizio Web. Verifica la connessione a Internet e riprova",
                captchaRefresh: "Ottieni una nuova sfida",
                privacy: "vita privata",
                terms: "condizioni",
                byMT: "Realizzato da MTCaptcha&trade;"
            },
            "zh-tw": {
                inputPrompt: "輸入圖片文字",
                loading: "裝貨",
                reload: "正在重新加載...",
                verifying: "證實...",
                verifyFail: "請再試一次..",
                verifySuccess: "已成功驗證",
                verifyExpired: "挑戰已過期，請單擊刷新",
                captchaExpired: "挑戰已過期，請重新開始",
                emptyCaptcha: "請完成挑戰",
                incompleteCaptcha: "缺少字符，請填寫...",
                audioPlay: "點擊播放音頻挑戰",
                audioPlaying: "播放音頻...",
                continueAudio: "單擊以繼續播放音頻",
                downloadAudio: "點擊下載音頻挑戰",
                audioDownloading: "正在下載音頻...",
                connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
                captchaRefresh: "迎接新挑戰",
                privacy: "隱私",
                terms: "條款",
                byMT: "由MTCaptcha&trade;提供支持"
            },
            "zh-hk": {
                inputPrompt: "輸入圖片文字",
                loading: "裝貨",
                reload: "正在重新加載...",
                verifying: "證實...",
                verifyFail: "請再試一次..",
                verifySuccess: "已成功驗證",
                verifyExpired: "挑戰已過期，請單擊刷新",
                captchaExpired: "挑戰已過期，請重新開始",
                emptyCaptcha: "請完成挑戰",
                incompleteCaptcha: "缺少字符，請填寫...",
                audioPlay: "點擊播放音頻挑戰",
                audioPlaying: "播放音頻...",
                continueAudio: "單擊以繼續播放音頻",
                downloadAudio: "點擊下載音頻挑戰",
                audioDownloading: "正在下載音頻...",
                connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
                captchaRefresh: "迎接新挑戰",
                privacy: "隱私",
                terms: "條款",
                byMT: "由MTCaptcha&trade;提供支持"
            },
            zh: {
                inputPrompt: "输入图片文字",
                loading: "装货",
                reload: "正在重新加载...",
                verifying: "证实...",
                verifyFail: "请再试一次..",
                verifySuccess: "已成功验证",
                verifyExpired: "挑战已过期，请单击刷新",
                captchaExpired: "挑战已过期，请重新开始",
                emptyCaptcha: "请完成挑战",
                incompleteCaptcha: "缺少字符，请填写...",
                audioPlay: "点击播放音频挑战",
                audioPlaying: "播放音频...",
                continueAudio: "单击以继续播放音频",
                downloadAudio: "点击下载音频挑战",
                audioDownloading: "正在下载音频...",
                connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
                captchaRefresh: "迎接新挑战",
                privacy: "隐私",
                terms: "条款",
                byMT: "由MTCaptcha&trade;提供支持"
            },
            "zh-cn": {
                inputPrompt: "输入图片文字",
                loading: "装货",
                reload: "正在重新加载...",
                verifying: "证实...",
                verifyFail: "请再试一次..",
                verifySuccess: "已成功验证",
                verifyExpired: "挑战已过期，请单击刷新",
                captchaExpired: "挑战已过期，请重新开始",
                emptyCaptcha: "请完成挑战",
                incompleteCaptcha: "缺少字符，请填写...",
                audioPlay: "点击播放音频挑战",
                audioPlaying: "播放音频...",
                continueAudio: "单击以继续播放音频",
                downloadAudio: "点击下载音频挑战",
                audioDownloading: "正在下载音频...",
                connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
                captchaRefresh: "迎接新挑战",
                privacy: "隐私",
                terms: "条款",
                byMT: "由MTCaptcha&trade;提供支持"
            },
            nl: {
                inputPrompt: "Voer tekst uit afbeelding in",
                loading: "bezig met laden",
                reload: "herladen ...",
                verifying: "valideren ...",
                verifyFail: "Probeer het opnieuw ..",
                verifySuccess: "Succesvol geverifieerd",
                verifyExpired: "Uitdaging verlopen, klik om te vernieuwen",
                captchaExpired: "De uitdaging is verlopen, begin opnieuw",
                emptyCaptcha: "Voltooi de uitdaging",
                incompleteCaptcha: "Tekens ontbreken, graag invullen ...",
                audioPlay: "Klik om audio-uitdaging te spelen",
                audioPlaying: "Audio afspelen ...",
                continueAudio: "Klik om door te gaan met afspelen van audio",
                downloadAudio: "Klik om de audio-uitdaging te downloaden",
                audioDownloading: "Audio downloaden ...",
                connectionError: "Kan webservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw",
                captchaRefresh: "Krijg nieuwe uitdaging",
                privacy: "Privacy",
                terms: "Voorwaarden",
                byMT: "Aangedreven door MTCaptcha&trade;"
            },
            de: {
                inputPrompt: "Geben Sie den Text aus dem Bild ein",
                loading: "Wird geladen",
                reload: "Neuladen...",
                verifying: "validieren ...",
                verifyFail: "Bitte versuche es erneut..",
                verifySuccess: "Erfolgreich verifiziert",
                verifyExpired: "Herausforderung abgelaufen, zum Aktualisieren klicken",
                captchaExpired: "Herausforderung abgelaufen, bitte neu starten",
                emptyCaptcha: "Bitte vervollständige die Herausforderung",
                incompleteCaptcha: "Zeichen fehlen, bitte ausfüllen ...",
                audioPlay: "Klicken Sie hier, um die Audio-Challenge abzuspielen",
                audioPlaying: "Audio abspielen ...",
                continueAudio: "Klicken Sie, um die Audiowiedergabe fortzusetzen",
                downloadAudio: "Klicken Sie hier, um die Audio-Challenge herunterzuladen",
                audioDownloading: "Audio wird heruntergeladen ...",
                connectionError: "Webdienst konnte nicht erreicht werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut",
                captchaRefresh: "Holen Sie sich neue Herausforderung",
                privacy: "Privatsphäre",
                terms: "Nutzungsbedingungen",
                byMT: "Unterstützt von MTCaptcha&trade;"
            }
        },
        miniLang: {
            en: {
                inputPrompt: "captcha",
                loading: "loading",
                reload: "reloading...",
                verifying: "validating...",
                verifyFail: "Please try again..",
                verifySuccess: "Verified Successfully",
                captchaExpired: "Challenge expired, please start again",
                verifyExpired: "Challenge expired, click to refresh",
                emptyCaptcha: "Please complete the challenge",
                incompleteCaptcha: "Characters missing, please complete...",
                audioPlay: "Click to play audio challenge",
                audioPlaying: "Playing audio...",
                continueAudio: "Click to continue audio playback",
                downloadAudio: "Click to download the audio challenge",
                audioDownloading: "Downloading audio...",
                connectionError: "Failed to reach web service, Please check your internet connection and try again",
                miniConnectionError: "Failed to connect to the internet, Please try again",
                captchaRefresh: "Get new challenge",
                privacy: "Privacy",
                terms: "Terms",
                miniByMT: "MTCaptcha&trade;",
                enterTextMsg: "Enter text from Image"
            },
            fr: {
                inputPrompt: "captcha",
                loading: "chargement",
                reload: "rechargement ...",
                verifying: "validation ...",
                verifyFail: "Veuillez réessayer..",
                verifySuccess: "Vérifié avec succès",
                captchaExpired: "Le défi a expiré, veuillez recommencer",
                verifyExpired: "Le défi a expiré, cliquez pour rafraîchir",
                emptyCaptcha: "Veuillez relever le défi",
                incompleteCaptcha: "Caractères manquants, veuillez compléter ...",
                audioPlay: "Cliquez pour lire le défi audio",
                audioPlaying: "Lecture audio ...",
                continueAudio: "Cliquez pour continuer la lecture audio",
                downloadAudio: "Cliquez pour télécharger le défi audio",
                audioDownloading: "Téléchargement audio ...",
                connectionError: "Impossible d&#39;accéder au service Web, veuillez vérifier votre connexion Internet et réessayer",
                miniConnectionError: "Impossible de se connecter à Internet, veuillez réessayer",
                captchaRefresh: "Obtenez un nouveau défi",
                privacy: "Confidentialité",
                terms: "Conditions",
                miniByMT: "MTCaptcha ™",
                enterTextMsg: "Entrez le texte de l&#39;image"
            },
            es: {
                inputPrompt: "captcha",
                loading: "cargando",
                reload: "recargando ...",
                verifying: "validando ...",
                verifyFail: "Inténtalo de nuevo..",
                verifySuccess: "Verificado con éxito",
                captchaExpired: "El desafío expiró, por favor comience nuevamente",
                verifyExpired: "Desafío expirado, haga clic para actualizar",
                emptyCaptcha: "Por favor completa el desafío",
                incompleteCaptcha: "Faltan caracteres, por favor complete ...",
                audioPlay: "Haz clic para reproducir el desafío de audio",
                audioPlaying: "Reproduciendo audio ...",
                continueAudio: "Haga clic para continuar la reproducción de audio.",
                downloadAudio: "Haga clic para descargar el desafío de audio",
                audioDownloading: "Descargando audio ...",
                connectionError: "No se pudo acceder al servicio web. Comprueba tu conexión a Internet y vuelve a intentarlo.",
                miniConnectionError: "No se pudo conectar a Internet. Vuelve a intentarlo.",
                captchaRefresh: "Consigue un nuevo desafío",
                privacy: "Intimidad",
                terms: "Condiciones",
                miniByMT: "MTCaptcha ™",
                enterTextMsg: "Ingrese el texto de la imagen"
            },
            it: {
                inputPrompt: "captcha",
                loading: "Caricamento in corso",
                reload: "ricaricare ...",
                verifying: "convalidare ...",
                verifyFail: "Per favore riprova..",
                verifySuccess: "Verificato con successo",
                captchaExpired: "Sfida scaduta, ricominciare",
                verifyExpired: "Sfida scaduta, fai clic per aggiornare",
                emptyCaptcha: "Per favore completa la sfida",
                incompleteCaptcha: "Caratteri mancanti, per favore completa ...",
                audioPlay: "Fai clic per riprodurre la sfida audio",
                audioPlaying: "Riproduzione audio ...",
                continueAudio: "Fare clic per continuare la riproduzione audio",
                downloadAudio: "Fai clic per scaricare la sfida audio",
                audioDownloading: "Download audio ...",
                connectionError: "Impossibile raggiungere il servizio Web. Verifica la connessione a Internet e riprova",
                miniConnectionError: "Impossibile connettersi a Internet, riprova",
                captchaRefresh: "Ottieni una nuova sfida",
                privacy: "vita privata",
                terms: "condizioni",
                miniByMT: "MTCaptcha ™",
                enterTextMsg: "Inserisci il testo dall&#39;immagine"
            },
            "zh-tw": {
                inputPrompt: "驗證碼",
                loading: "裝貨",
                reload: "正在重新加載...",
                verifying: "證實...",
                verifyFail: "請再試一遍..",
                verifySuccess: "已成功驗證",
                captchaExpired: "挑戰已過期，請重新開始",
                verifyExpired: "挑戰已過期，請單擊刷新",
                emptyCaptcha: "請完成挑戰",
                incompleteCaptcha: "缺少字符，請填寫...",
                audioPlay: "點擊播放音頻挑戰",
                audioPlaying: "播放音頻...",
                continueAudio: "單擊以繼續播放音頻",
                downloadAudio: "點擊下載音頻挑戰",
                audioDownloading: "正在下載音頻...",
                connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
                miniConnectionError: "無法連接到互聯網，請重試",
                captchaRefresh: "迎接新挑戰",
                privacy: "隱私",
                terms: "條款",
                miniByMT: "MTCaptcha™",
                enterTextMsg: "輸入圖片中的文字"
            },
            "zh-hk": {
                inputPrompt: "驗證碼",
                loading: "裝貨",
                reload: "正在重新加載...",
                verifying: "證實...",
                verifyFail: "請再試一遍..",
                verifySuccess: "已成功驗證",
                captchaExpired: "挑戰已過期，請重新開始",
                verifyExpired: "挑戰已過期，請單擊刷新",
                emptyCaptcha: "請完成挑戰",
                incompleteCaptcha: "缺少字符，請填寫...",
                audioPlay: "點擊播放音頻挑戰",
                audioPlaying: "播放音頻...",
                continueAudio: "單擊以繼續播放音頻",
                downloadAudio: "點擊下載音頻挑戰",
                audioDownloading: "正在下載音頻...",
                connectionError: "無法訪問網絡服務，請檢查您的互聯網連接，然後重試",
                miniConnectionError: "無法連接到互聯網，請重試",
                captchaRefresh: "迎接新挑戰",
                privacy: "隱私",
                terms: "條款",
                miniByMT: "MTCaptcha™",
                enterTextMsg: "輸入圖片中的文字"
            },
            zh: {
                inputPrompt: "验证码",
                loading: "装货",
                reload: "正在重新加载...",
                verifying: "证实...",
                verifyFail: "请再试一遍..",
                verifySuccess: "已成功验证",
                captchaExpired: "挑战已过期，请重新开始",
                verifyExpired: "挑战已过期，请单击刷新",
                emptyCaptcha: "请完成挑战",
                incompleteCaptcha: "缺少字符，请填写...",
                audioPlay: "点击播放音频挑战",
                audioPlaying: "播放音频...",
                continueAudio: "单击以继续播放音频",
                downloadAudio: "点击下载音频挑战",
                audioDownloading: "正在下载音频...",
                connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
                miniConnectionError: "无法连接到互联网，请重试",
                captchaRefresh: "迎接新挑战",
                privacy: "隐私",
                terms: "条款",
                miniByMT: "MTCaptcha™",
                enterTextMsg: "输入图片中的文字"
            },
            "zh-cn": {
                inputPrompt: "验证码",
                loading: "装货",
                reload: "正在重新加载...",
                verifying: "证实...",
                verifyFail: "请再试一遍..",
                verifySuccess: "已成功验证",
                captchaExpired: "挑战已过期，请重新开始",
                verifyExpired: "挑战已过期，请单击刷新",
                emptyCaptcha: "请完成挑战",
                incompleteCaptcha: "缺少字符，请填写...",
                audioPlay: "点击播放音频挑战",
                audioPlaying: "播放音频...",
                continueAudio: "单击以继续播放音频",
                downloadAudio: "点击下载音频挑战",
                audioDownloading: "正在下载音频...",
                connectionError: "无法访问网络服务，请检查您的互联网连接，然后重试",
                miniConnectionError: "无法连接到互联网，请重试",
                captchaRefresh: "迎接新挑战",
                privacy: "隐私",
                terms: "条款",
                miniByMT: "MTCaptcha™",
                enterTextMsg: "输入图片中的文字"
            },
            nl: {
                inputPrompt: "captcha",
                loading: "bezig met laden",
                reload: "herladen ...",
                verifying: "valideren ...",
                verifyFail: "Probeer het opnieuw ..",
                verifySuccess: "Succesvol geverifieerd",
                captchaExpired: "De uitdaging is verlopen, begin opnieuw",
                verifyExpired: "Uitdaging verlopen, klik om te vernieuwen",
                emptyCaptcha: "Voltooi de uitdaging",
                incompleteCaptcha: "Tekens ontbreken, graag invullen ...",
                audioPlay: "Klik om audio-uitdaging te spelen",
                audioPlaying: "Audio afspelen ...",
                continueAudio: "Klik om door te gaan met afspelen van audio",
                downloadAudio: "Klik om de audio-uitdaging te downloaden",
                audioDownloading: "Audio downloaden ...",
                connectionError: "Kan webservice niet bereiken. Controleer je internetverbinding en probeer het opnieuw",
                miniConnectionError: "Kan geen verbinding maken met internet. Probeer het opnieuw",
                captchaRefresh: "Krijg nieuwe uitdaging",
                privacy: "Privacy",
                terms: "Voorwaarden",
                miniByMT: "MTCaptcha ™",
                enterTextMsg: "Voer tekst uit afbeelding in"
            },
            de: {
                inputPrompt: "captcha",
                loading: "Wird geladen",
                reload: "Neuladen...",
                verifying: "validieren ...",
                verifyFail: "Bitte versuche es erneut..",
                verifySuccess: "Erfolgreich verifiziert",
                captchaExpired: "Herausforderung abgelaufen, bitte neu starten",
                verifyExpired: "Herausforderung abgelaufen, zum Aktualisieren klicken",
                emptyCaptcha: "Bitte vervollständige die Herausforderung",
                incompleteCaptcha: "Zeichen fehlen, bitte ausfüllen ...",
                audioPlay: "Klicken Sie hier, um die Audio-Challenge abzuspielen",
                audioPlaying: "Audio abspielen ...",
                continueAudio: "Klicken Sie, um die Audiowiedergabe fortzusetzen",
                downloadAudio: "Klicken Sie hier, um die Audio-Challenge herunterzuladen",
                audioDownloading: "Audio wird heruntergeladen ...",
                connectionError: "Webdienst konnte nicht erreicht werden. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut",
                miniConnectionError: "Verbindung zum Internet fehlgeschlagen. Bitte versuchen Sie es erneut",
                captchaRefresh: "Holen Sie sich neue Herausforderung",
                privacy: "Privatsphäre",
                terms: "Nutzungsbedingungen",
                miniByMT: "MTCaptcha ™",
                enterTextMsg: "Geben Sie den Text aus dem Bild ein"
            }
        },
        aria: {
            en: {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha privacy policy.",
                    termsLink: "M T Captcha terms and conditions.",
                    poweredByLink: "Powered by M T Captcha trademark",
                    audioButton: "captcha audio, click to play or pause.",
                    image: "captcha image.",
                    inputTextForm: "enter text from captcha to verify you are not a bot. use comma key to play or pause captcha audio, use question mark key to get new captcha challenge.",
                    statusButton: "get new captcha challenge."
                },
                audioDownloading: {
                    audioButton: "audio downloading.",
                    inputTextForm: "audio downloading."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "loading new captcha.",
                    inputTextForm: "loading new captcha.",
                    statusButton: "loading new captcha."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "new captcha loaded.",
                    statusButton: "new captcha loaded."
                },
                challengeIncomplete: {
                    inputTextForm: "characters missing, please complete."
                },
                verifyingInput: {
                    audioButton: "captcha verifying.",
                    inputTextForm: "captcha verifying.",
                    statusButton: "captcha verifying."
                },
                validationFailed: {
                    audioButton: "verification failed.",
                    inputTextForm: "verification failed.",
                    statusButton: "verification failed."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "captcha verified successfully.",
                    statusButton: "captcha verified successfully."
                },
                tokenTimeOut: {
                    audioButton: "verification timed out click to do captcha again.",
                    inputTextForm: "verification timed out click to do captcha again.",
                    statusButton: "verification timed out click to do captcha again."
                }
            },
            fr: {
                default: {
                    requireCSS: "",
                    privacyLink: "Politique de confidentialité de M T Captcha.",
                    termsLink: "Termes et conditions M T Captcha.",
                    poweredByLink: "Propulsé par M T Captcha Trademark",
                    audioButton: "captcha audio, cliquez pour lire ou mettre en pause.",
                    image: "image captcha.",
                    inputTextForm: "entrez le texte de captcha pour vérifier que vous n'êtes pas un bot. utilisez la touche virgule pour lire ou mettre en pause l'audio captcha, utilisez la touche point d'interrogation pour obtenir un nouveau défi Captcha.",
                    statusButton: "obtenir un nouveau défi captcha."
                },
                audioDownloading: {
                    audioButton: "téléchargement audio.",
                    inputTextForm: "téléchargement audio."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "chargement du nouveau captcha.",
                    inputTextForm: "chargement du nouveau captcha.",
                    statusButton: "chargement du nouveau captcha."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "nouveau captcha chargé.",
                    statusButton: "nouveau captcha chargé."
                },
                challengeIncomplete: {
                    inputTextForm: "caractères manquants, veuillez compléter."
                },
                verifyingInput: {
                    audioButton: "captcha vérifiant.",
                    inputTextForm: "captcha vérifiant.",
                    statusButton: "captcha vérifiant."
                },
                validationFailed: {
                    audioButton: "échec de la vérification.",
                    inputTextForm: "échec de la vérification.",
                    statusButton: "échec de la vérification."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "captcha vérifié avec succès.",
                    statusButton: "captcha vérifié avec succès."
                },
                tokenTimeOut: {
                    audioButton: "la vérification a expiré, cliquez pour refaire captcha.",
                    inputTextForm: "la vérification a expiré, cliquez pour refaire captcha.",
                    statusButton: "la vérification a expiré, cliquez pour refaire captcha."
                }
            },
            es: {
                default: {
                    requireCSS: "",
                    privacyLink: "Política de privacidad de M T Captcha.",
                    termsLink: "Términos y condiciones de M T Captcha.",
                    poweredByLink: "Desarrollado por M T Captcha Marca registrada",
                    audioButton: "captcha de audio, haga clic para reproducir o pausar.",
                    image: "imagen CAPTCHA.",
                    inputTextForm: "Ingresa el texto de captcha para verificar que no eres un bot. use la tecla de coma para reproducir o pausar el audio captcha, use la tecla de signo de interrogación para obtener el nuevo desafío de captcha.",
                    statusButton: "Consigue nuevo reto captcha."
                },
                audioDownloading: {
                    audioButton: "Descarga de audio.",
                    inputTextForm: "Descarga de audio."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "Cargando nuevo captcha.",
                    inputTextForm: "Cargando nuevo captcha.",
                    statusButton: "Cargando nuevo captcha."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "nuevo captcha cargado.",
                    statusButton: "nuevo captcha cargado."
                },
                challengeIncomplete: {
                    inputTextForm: "caracteres que faltan, por favor complete"
                },
                verifyingInput: {
                    audioButton: "Verificación de captcha.",
                    inputTextForm: "Verificación de captcha.",
                    statusButton: "Verificación de captcha."
                },
                validationFailed: {
                    audioButton: "Fallo en la verificación.",
                    inputTextForm: "Fallo en la verificación.",
                    statusButton: "Fallo en la verificación."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "Captcha verificado con éxito.",
                    statusButton: "Captcha verificado con éxito."
                },
                tokenTimeOut: {
                    audioButton: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo.",
                    inputTextForm: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo.",
                    statusButton: "verificación agotada en el tiempo haga clic para hacer captcha de nuevo."
                }
            },
            it: {
                default: {
                    requireCSS: "",
                    privacyLink: "Informativa sulla privacy di M T Captcha.",
                    termsLink: "Termini e condizioni M T Captcha.",
                    poweredByLink: "Alimentato dal marchio M T Captcha",
                    audioButton: "captcha audio, fare clic per riprodurre o mettere in pausa.",
                    image: "immagine captcha.",
                    inputTextForm: "inserisci il testo da captcha per verificare che non sei un bot. usa il tasto virgola per riprodurre o mettere in pausa l'audio captcha, usa il tasto punto interrogativo per ottenere una nuova sfida captcha.",
                    statusButton: "ottieni una nuova sfida captcha."
                },
                audioDownloading: {
                    audioButton: "download audio.",
                    inputTextForm: "download audio."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "caricamento nuovo captcha.",
                    inputTextForm: "caricamento nuovo captcha.",
                    statusButton: "caricamento nuovo captcha."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "nuovo captcha caricato.",
                    statusButton: "nuovo captcha caricato."
                },
                challengeIncomplete: {
                    inputTextForm: "caratteri mancanti, per favore completa."
                },
                verifyingInput: {
                    audioButton: "captcha verifica.",
                    inputTextForm: "captcha verifica.",
                    statusButton: "captcha verifica."
                },
                validationFailed: {
                    audioButton: "verifica fallita.",
                    inputTextForm: "verifica fallita.",
                    statusButton: "verifica fallita."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "captcha verificato con successo.",
                    statusButton: "captcha verificato con successo."
                },
                tokenTimeOut: {
                    audioButton: "verifica scaduta per fare di nuovo captcha.",
                    inputTextForm: "verifica scaduta per fare di nuovo captcha.",
                    statusButton: "verifica scaduta per fare di nuovo captcha."
                }
            },
            "zh-tw": {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha隱私政策。",
                    termsLink: "M T Captcha條款和條件。",
                    poweredByLink: "由M T Captcha商標提供支持",
                    audioButton: "驗證碼音頻，點擊播放或暫停。",
                    image: "驗證碼圖像。",
                    inputTextForm: "從驗證碼輸入文本以驗證您不是機器人。使用逗號鍵播放或暫停驗證碼音頻，使用問號鍵獲取新的驗證碼挑戰。",
                    statusButton: "獲得新的驗證碼挑戰。"
                },
                audioDownloading: {
                    audioButton: "音頻下載。",
                    inputTextForm: "音頻下載。"
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "加載新的驗證碼。",
                    inputTextForm: "加載新的驗證碼。",
                    statusButton: "加載新的驗證碼。"
                },
                captchaNewlyLoaded: {
                    inputTextForm: "新的驗證碼已加載。",
                    statusButton: "新的驗證碼已加載。"
                },
                challengeIncomplete: {
                    inputTextForm: "字符缺失，請完成。"
                },
                verifyingInput: {
                    audioButton: "驗證碼驗證。",
                    inputTextForm: "驗證碼驗證。",
                    statusButton: "驗證碼驗證。"
                },
                validationFailed: {
                    audioButton: "驗證失敗。",
                    inputTextForm: "驗證失敗。",
                    statusButton: "驗證失敗。"
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "驗證碼驗證成功。",
                    statusButton: "驗證碼驗證成功。"
                },
                tokenTimeOut: {
                    audioButton: "驗證超時點擊再次執行驗證碼。",
                    inputTextForm: "驗證超時點擊再次執行驗證碼。",
                    statusButton: "驗證超時點擊再次執行驗證碼。"
                }
            },
            "zh-hk": {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha隱私政策。",
                    termsLink: "M T Captcha條款和條件。",
                    poweredByLink: "由M T Captcha商標提供支持",
                    audioButton: "验证码音频，点击播放或暂停。",
                    image: "验证码图像。",
                    inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
                    statusButton: "获得新的验证码挑战。"
                },
                audioDownloading: {
                    audioButton: "音频下载。",
                    inputTextForm: "音频下载。"
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "加载新的验证码。",
                    inputTextForm: "加载新的验证码。",
                    statusButton: "加载新的验证码。"
                },
                captchaNewlyLoaded: {
                    inputTextForm: "新的验证码已加载。",
                    statusButton: "新的验证码已加载。"
                },
                challengeIncomplete: {
                    inputTextForm: "字符缺失，请完成。"
                },
                verifyingInput: {
                    audioButton: "验证码验证。",
                    inputTextForm: "验证码验证。",
                    statusButton: "验证码验证。"
                },
                validationFailed: {
                    audioButton: "验证失败。",
                    inputTextForm: "验证失败。",
                    statusButton: "验证失败。"
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "验证码验证成功。",
                    statusButton: "验证码验证成功。"
                },
                tokenTimeOut: {
                    audioButton: "验证超时点击再次执行验证码。",
                    inputTextForm: "验证超时点击再次执行验证码。",
                    statusButton: "验证超时点击再次执行验证码。"
                }
            },
            zh: {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha隐私政策。",
                    termsLink: "M T Captcha条款和条件。",
                    poweredByLink: "由M T Captcha商标提供支持",
                    audioButton: "验证码音频，点击播放或暂停。",
                    image: "验证码图像。",
                    inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
                    statusButton: "获得新的验证码挑战。"
                },
                audioDownloading: {
                    audioButton: "音频下载。",
                    inputTextForm: "音频下载。"
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "加载新的验证码。",
                    inputTextForm: "加载新的验证码。",
                    statusButton: "加载新的验证码。"
                },
                captchaNewlyLoaded: {
                    inputTextForm: "新的验证码已加载。",
                    statusButton: "新的验证码已加载。"
                },
                challengeIncomplete: {
                    inputTextForm: "字符缺失，请完成。"
                },
                verifyingInput: {
                    audioButton: "验证码验证。",
                    inputTextForm: "验证码验证。",
                    statusButton: "验证码验证。"
                },
                validationFailed: {
                    audioButton: "验证失败。",
                    inputTextForm: "验证失败。",
                    statusButton: "验证失败。"
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "验证码验证成功。",
                    statusButton: "验证码验证成功。"
                },
                tokenTimeOut: {
                    audioButton: "验证超时点击再次执行验证码。",
                    inputTextForm: "验证超时点击再次执行验证码。",
                    statusButton: "验证超时点击再次执行验证码。"
                }
            },
            "zh-cn": {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha隐私政策。",
                    termsLink: "M T Captcha条款和条件。",
                    poweredByLink: "由M T Captcha商标提供支持",
                    audioButton: "验证码音频，点击播放或暂停。",
                    image: "验证码图像。",
                    inputTextForm: "从验证码输入文本以验证您不是机器人。使用逗号键播放或暂停验证码音频，使用问号键获取新的验证码挑战。",
                    statusButton: "获得新的验证码挑战。"
                },
                audioDownloading: {
                    audioButton: "音频下载。",
                    inputTextForm: "音频下载。"
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "加载新的验证码。",
                    inputTextForm: "加载新的验证码。",
                    statusButton: "加载新的验证码。"
                },
                captchaNewlyLoaded: {
                    inputTextForm: "新的验证码已加载。",
                    statusButton: "新的验证码已加载。"
                },
                challengeIncomplete: {
                    inputTextForm: "字符缺失，请完成。"
                },
                verifyingInput: {
                    audioButton: "验证码验证。",
                    inputTextForm: "验证码验证。",
                    statusButton: "验证码验证。"
                },
                validationFailed: {
                    audioButton: "验证失败。",
                    inputTextForm: "验证失败。",
                    statusButton: "验证失败。"
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "验证码验证成功。",
                    statusButton: "验证码验证成功。"
                },
                tokenTimeOut: {
                    audioButton: "验证超时点击再次执行验证码。",
                    inputTextForm: "验证超时点击再次执行验证码。",
                    statusButton: "验证超时点击再次执行验证码。"
                }
            },
            nl: {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha privacybeleid.",
                    termsLink: "M T Captcha algemene voorwaarden.",
                    poweredByLink: "Mogelijk gemaakt door M T Captcha Handelsmerk",
                    audioButton: "captcha-audio, klik om af te spelen of te pauzeren.",
                    image: "captcha afbeelding.",
                    inputTextForm: "voer de tekst van captcha in om te verifiëren dat je geen bot bent. gebruik de komma-toets om captcha-audio af te spelen of te pauzeren, gebruik de vraagtekentoets om een nieuwe captcha-uitdaging te krijgen.",
                    statusButton: "krijg nieuwe Captcha-uitdaging."
                },
                audioDownloading: {
                    audioButton: "audio downloaden.",
                    inputTextForm: "audio downloaden."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "nieuwe captcha laden.",
                    inputTextForm: "nieuwe captcha laden.",
                    statusButton: "nieuwe captcha laden."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "nieuwe captcha geladen.",
                    statusButton: "nieuwe captcha geladen."
                },
                challengeIncomplete: {
                    inputTextForm: "tekens ontbreken, vul alsjeblieft in."
                },
                verifyingInput: {
                    audioButton: "captcha-verificatie.",
                    inputTextForm: "captcha-verificatie.",
                    statusButton: "captcha-verificatie."
                },
                validationFailed: {
                    audioButton: "verificatie mislukt.",
                    inputTextForm: "verificatie mislukt.",
                    statusButton: "verificatie mislukt."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "captcha is geverifieerd.",
                    statusButton: "captcha is geverifieerd."
                },
                tokenTimeOut: {
                    audioButton: "verificatie timed out klik om opnieuw captcha te doen.",
                    inputTextForm: "verificatie timed out klik om opnieuw captcha te doen.",
                    statusButton: "verificatie timed out klik om opnieuw captcha te doen."
                }
            },
            de: {
                default: {
                    requireCSS: "",
                    privacyLink: "M T Captcha Datenschutzerklärung.",
                    termsLink: "Allgemeine Geschäftsbedingungen von M T Captcha.",
                    poweredByLink: "Powered by M T Captcha Trademark",
                    audioButton: "Captcha-Audio, klicken Sie zum Abspielen oder Anhalten.",
                    image: "CAPTCHA Bild.",
                    inputTextForm: "Geben Sie Text aus dem Captcha ein, um sicherzustellen, dass Sie kein Bot sind. Verwenden Sie die Kommataste, um Captcha-Audio abzuspielen oder anzuhalten. Verwenden Sie die Fragezeichen-Taste, um eine neue Captcha-Abfrage zu erhalten.",
                    statusButton: "Neue Captcha-Herausforderung erhalten."
                },
                audioDownloading: {
                    audioButton: "Audio herunterladen.",
                    inputTextForm: "Audio herunterladen."
                },
                audioPlaying: {},
                loadingNew: {
                    audioButton: "lade neues captcha.",
                    inputTextForm: "lade neues captcha.",
                    statusButton: "lade neues captcha."
                },
                captchaNewlyLoaded: {
                    inputTextForm: "Neues Captcha geladen.",
                    statusButton: "Neues Captcha geladen."
                },
                challengeIncomplete: {
                    inputTextForm: "Zeichen fehlen, bitte ausfüllen."
                },
                verifyingInput: {
                    audioButton: "Captcha-Überprüfung.",
                    inputTextForm: "Captcha-Überprüfung.",
                    statusButton: "Captcha-Überprüfung."
                },
                validationFailed: {
                    audioButton: "Verifizierung fehlgeschlagen.",
                    inputTextForm: "Verifizierung fehlgeschlagen.",
                    statusButton: "Verifizierung fehlgeschlagen."
                },
                validationSuccess: {
                    audioButton: "",
                    inputTextForm: "captcha erfolgreich verifiziert.",
                    statusButton: "captcha erfolgreich verifiziert."
                },
                tokenTimeOut: {
                    audioButton: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen.",
                    inputTextForm: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen.",
                    statusButton: "Zeitüberschreitung der Überprüfung Klicken Sie, um das Captcha erneut zu erstellen."
                }
            }
        }
    };
    function _0x58c3e8(_0x1fc3a1, _0x21d990) {
        var _0x1f9652 = [_0x1fc3a1, _0x21d990];
        var _0x580917 = _0x1f9652["reduce"](function (_0xfef886, _0x49412e) {
            Object["keys"](_0x49412e)["forEach"](function (_0x1fc75e) {
                _0xfef886[_0x1fc75e] = _0x49412e[_0x1fc75e];
            });
            return _0xfef886;
        }, {});
        return _0x580917;
    }
    if (typeof mtlang !== "undefined") {
        constants["messages"]["lang"] = _0x58c3e8(constants["messages"]["lang"], mtlang["lang"]);
        constants["messages"]["miniLang"] = _0x58c3e8(constants["messages"]["miniLang"], mtlang.miniLang);
        constants["messages"]["aria"] = _0x58c3e8(constants["messages"]["aria"], mtlang.aria);
    }
    if (window["addEventListener"]) {
        _0x2048b2 = window["addEventListener"];
    } else if (window["attachEvent"]) {
        _0x2048b2 = window.attachEvent;
    }
    if (!Date["now"]) {
        Date["now"] = function () {
            return new Date()["getTime"]();
        };
    }
    if (!document["getElementsByClassName"]) {
        var _0x1dfc40 = []["indexOf"] || function (_0x20f641) {
            for (var _0x4f9d58 = 0; _0x4f9d58 < this["length"]; _0x4f9d58++) {
                if (this[_0x4f9d58] === _0x20f641) {
                    return _0x4f9d58;
                }
            }
            return -1;
        };
        function _0x4efc7f(_0x101bc6, _0x164c61) {
            var _0x2190d1 = document.querySelectorAll ? _0x164c61["querySelectorAll"]("." + _0x101bc6) : function () {
                var _0x5a1892 = _0x164c61.getElementsByTagName("*");
                var _0x5e1a13 = [];
                var _0x4ee5ee = 0;
                for (; _0x4ee5ee < _0x5a1892["length"]; _0x4ee5ee++) {
                    if (_0x5a1892[_0x4ee5ee]["className"] && (" " + _0x5a1892[_0x4ee5ee].className + " ")["indexOf"](" " + _0x101bc6 + " ") > -1 && _0x1dfc40["call"](_0x5e1a13, _0x5a1892[_0x4ee5ee]) === -1) {
                        _0x5e1a13.push(_0x5a1892[_0x4ee5ee]);
                    }
                }
                return _0x5e1a13;
            }();
            return _0x2190d1;
        }
        document["getElementsByClassName"] = function (_0xb80394) {
            return _0x4efc7f(_0xb80394, document);
        };
        if (Element) {
            Element["prototype"]["getElementsByClassName"] = function (_0x443863) {
                return _0x4efc7f(_0x443863, this);
            };
        }
    }
    if (!Object.keys) {
        Object["keys"] = function (_0x1df81d) {
            var _0x12127d = [];
            for (var _0x186ebe in _0x1df81d) {
                if (_0x1df81d.hasOwnProperty(_0x186ebe)) {
                    _0x12127d["push"](_0x186ebe);
                }
            }
            return _0x12127d;
        };
    }
    constants["util"] = {
        setUserInputWidgetSize: function (_0x2fde1f, _0x3ca281, _0x370bd9, _0x217bb6) {
            var _0x30ad6e = _0x2fde1f["miniFormWidth"] || _0x370bd9;
            var _0x1c3074 = _0x2fde1f["miniFormHeight"] || _0x217bb6;
            var _0x5e08fa = _0x30ad6e - constants["util"].getBorderOfCaptcha(_0x3ca281);
            var _0x139204 = _0x1c3074;
            _0x139204 = this["enforceMinMax"](_0x139204, constants["constant"].minMiniHeight, constants.constant["maxMiniHeight"]);
            _0x5e08fa = this["enforceMinMax"](_0x5e08fa, constants.constant["minMiniWidth"], constants.constant["maxMiniWidth"]);
            _0x139204 -= 2;
            var _0x42e510 = _0x139204;
            var _0x27b1c2 = _0x139204;
            var _0x4e5667 = -1;
            var _0x5897df = _0x5e08fa * 0.6 - _0x42e510;
            var _0x4c090a = _0x139204;
            var _0x3f57dd = -1;
            _0x5897df = this["enforceMinMax"](_0x5897df, constants["config"]["miniDefaults"].minCaptchaWidth, constants["config"]["miniDefaults"]["maxCaptchaWidth"]);
            var _0x241427 = _0x5e08fa - _0x42e510 - _0x5897df;
            var _0x27222c = _0x139204;
            var _0x5104bf = -1;
            if (_0x241427 < constants.constant.minTextFieldWidth) {
                var _0x1cc8ec = constants["constant"].minTextFieldWidth - _0x241427;
                _0x241427 = constants["constant"].minTextFieldWidth;
                _0x42e510 -= _0x1cc8ec;
            }
            if (_0x3ca281["audioControl"] != null) {
                var _0x19e449 = _0x3ca281["audioControl"]["scrollWidth"];
                var _0x4f145e = _0x241427 - Math["floor"](_0x19e449 / 2) - 4;
                this["setCSSLeftTopWidthHeight"](_0x3ca281["audioControl"], _0x4f145e, 0, null, null);
            }
            _0x3f57dd = _0x241427;
            _0x4e5667 = _0x241427 + _0x5897df - 1;
            this["setCSSLeftTopWidthHeight"](_0x3ca281["main"], null, null, _0x5e08fa, _0x139204);
            this["setCSSLeftTopWidthHeight"](_0x3ca281["card"], null, null, _0x5e08fa, _0x139204);
            this["setCSSLeftTopWidthHeight"](_0x3ca281["inputbox"], _0x5104bf, -1, _0x241427, _0x27222c);
            this["setCSSLeftTopWidthHeight"](_0x3ca281["imageContainer"], _0x3f57dd, -1, _0x5897df - 2, _0x4c090a);
            this["setCSSLeftTopWidthHeight"](_0x3ca281["stsBox"], _0x4e5667, -1, _0x42e510, _0x27b1c2);
            this.setCSSLeftTopWidthHeight(_0x3ca281["msgContainer"], null, null, _0x5e08fa, null);
            _0x2fde1f.widgetWidth = _0x5e08fa;
            _0x2fde1f["widgetHeight"] = _0x139204;
            var _0xbd6c64 = _0x241427 < 112 ? "smaller" : "medium";
            _0x3ca281.inputText["style"]["fontSize"] = _0xbd6c64;
        },
        convertTimeHexToNumber: function (_0x4ea477) {
            if (_0x4ea477) {
                var _0x4985f3 = _0x4ea477.substring(1);
                var _0x8f5ecd = parseInt(_0x4985f3, 16);
                var _0x198867 = (_0x8f5ecd * 47 + 11) % 256 * 100;
                return _0x198867;
            } else {
                return 0;
            }
        },
        getColorFromBorder: function (_0x139f76) {
            return _0x139f76["slice"](_0x139f76.search("#"));
        },
        getBorderOfCaptcha: function (_0x1ce3ff) {
            if (_0x1ce3ff["card"]["style"]["border"]) {
                return _0x1ce3ff["card"]["offsetWidth"] - _0x1ce3ff["card"]["clientWidth"];
            } else {
                return 2;
            }
        },
        addEvent: function (_0x47f0d9, _0x2e93a9, _0x5e12c4) {
            if (_0x47f0d9 == null || typeof _0x47f0d9 == "undefined") {
                return;
            }
            if (_0x47f0d9["addEventListener"]) {
                _0x47f0d9.addEventListener(_0x2e93a9, _0x5e12c4, false);
            } else if (_0x47f0d9["attachEvent"]) {
                _0x47f0d9["attachEvent"]("on" + _0x2e93a9, _0x5e12c4);
            } else {
                _0x47f0d9["on" + _0x2e93a9] = _0x5e12c4;
            }
        },
        enforceMinMax: function (_0x448faa, _0x339e6b, _0x20949f) {
            if (_0x448faa < _0x339e6b) {
                return _0x339e6b;
            }
            if (_0x448faa > _0x20949f) {
                return _0x20949f;
            }
            return _0x448faa;
        },
        setCSSLeftTopWidthHeight: function (_0x2e7416, _0x4ed5fb, _0x1bc617, _0x2ee5d8, _0xea5614) {
            if (typeof _0x4ed5fb === "number") {
                _0x2e7416["style"]["left"] = _0x4ed5fb + "px";
            }
            if (typeof _0x1bc617 === "number") {
                _0x2e7416["style"]["top"] = _0x1bc617 + "px";
            }
            if (typeof _0x2ee5d8 === "number") {
                _0x2e7416["style"]["width"] = _0x2ee5d8 + "px";
            }
            if (typeof _0xea5614 === "number") {
                _0x2e7416["style"]["height"] = _0xea5614 + "px";
            }
        },
        validateMinMaxValue: function (_0x370984) {
            if (_0x370984 < constants["config"]["miniDefaults"]["minCaptchaWidth"]) {
                return constants["config"]["miniDefaults"].minCaptchaWidth;
            }
            if (_0x370984 > constants.config["miniDefaults"]["maxCaptchaWidth"]) {
                return constants.config["miniDefaults"].maxCaptchaWidth;
            }
            return _0x370984;
        },
        setObject: function (_0x2ce103) {
            objects[_0x2ce103.widgetInstance] = this["assign"](_0x2ce103);
        },
        isBolean: function (_0x2615b3) {
            return typeof _0x2615b3 === "boolean";
        },
        isObject: function (_0x28bb19) {
            return typeof _0x28bb19 === "object";
        },
        isString: function (_0x1df2a2) {
            return typeof _0x1df2a2 === "string";
        },
        isArray: function (_0x1fa59d) {
            return Object["prototype"]["toString"].call(_0x1fa59d) === "[object Array]";
        },
        canSolveChallenge: function () {
            var _0xb6f004 = constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"];
            return _0xb6f004.value["length"] >= _0x33a29e["anslen"] && _0xb6f004["value"] != _0xb6f004["getAttribute"]("placeholder") && _0x33a29e["sCode"] != constants["status"]["code"]["general"]["CAP_EXPIRED"] && _0x33a29e["isVerifying"] !== true;
        },
        removePlaceholderText: function () {
            var _0x43a607 = constants.UI.e[_0x33a29e["widgetInstance"]]["inputText"];
            if (typeof _0x39f824 !== "undefined" && _0x39f824 !== "" && _0x43a607["value"] === _0x43a607.getAttribute("placeholder")) {
                _0x43a607["value"] = "";
            }
        },
        getFixPositionOfDom: function (_0x35b217) {
            var _0x19fa6d = _0x35b217["getBoundingClientRect"]();
            var _0x4787b4 = window["pageXOffset"] || document["documentElement"]["scrollLeft"];
            var _0x40a98f = window["pageYOffset"] || document["documentElement"]["scrollTop"];
            return {
                top: _0x19fa6d["top"] + _0x40a98f,
                left: _0x19fa6d["left"] + _0x4787b4
            };
        },
        updateErrorCardHeight: function (_0x45f389) {
            var _0x44d6a8 = _0x45f389["card"]["scrollHeight"];
            var _0x54e341 = constants.util["getFixPositionOfDom"](_0x45f389["card"]);
            var _0xceb704 = _0x45f389.errCard["scrollHeight"];
            if (_0x44d6a8 < _0xceb704) {
                _0x45f389["card"]["style"].height = _0xceb704;
                constants["util"]["widgetHeightChange"](_0x33a29e);
            }
            var _0x34b03e = (_0x45f389["card"]["offsetHeight"] - _0x45f389["card"]["clientHeight"]) / 2;
            _0x45f389["errCard"]["style"]["top"] = _0x54e341["top"] + _0x34b03e + 2 + "px";
        },
        detectAutoplaySupport: function () {
            if (typeof _0x33a29e !== "undefined" && _0x33a29e.challengeType !== "undefined" && _0x33a29e.challengeType == "imageonly") {
                return;
            }
            var _0x30a577 = new Audio();
            _0x30a577["src"] = constants["asserts"]["audio"];
            _0x30a577.autoplay = true;
            _0x30a577.volume = 0;
            _0x30a577.id = "testAudio";
            document.getElementsByTagName('body')[0]["appendChild"](_0x30a577);
            var _0x62653d = document["getElementById"]("testAudio");
            setTimeout(function () {
                if (!_0x62653d["paused"]) {
                    constants["autoPlay"] = true;
                }
                document.getElementsByTagName("body")[0]["removeChild"](_0x30a577);
            }, 100);
        },
        addEvent: function (_0x267ffa, _0x38e67a, _0xc8259b) {
            if (_0x38e67a instanceof Array) {
                for (var _0x511cf8 = 0; _0x511cf8 < _0x38e67a.length; _0x511cf8++) {
                    if (_0x267ffa.addEventListener) {
                        _0x267ffa.addEventListener(_0x38e67a[_0x511cf8], _0xc8259b);
                    } else if (_0x267ffa.attachEvent) {
                        _0x267ffa["attachEvent"](_0x38e67a[_0x511cf8], _0xc8259b);
                    }
                }
            } else if (_0x267ffa.addEventListener) {
                _0x267ffa.addEventListener(_0x38e67a, _0xc8259b);
            } else if (_0x267ffa["attachEvent"]) {
                _0x267ffa["attachEvent"](_0x38e67a, _0xc8259b);
            }
        },
        getIEVersion: function () {
            var _0x181ed6 = !!window.ActiveXObject && +/msie\s(\d+)/i["exec"](navigator.userAgent)[1] || NaN;
            if (_0x181ed6 === 8) {
                return "ie8";
            } else if (_0x181ed6 === 9) {
                return "ie9";
            }
        },
        getRGBAtoRGB: function (_0x1c6179) {
            var _0x5c50b7 = Math["round"]((1 - _0x1c6179[3]) * 255 + _0x1c6179[3] * _0x1c6179[0]);
            var _0x453957 = Math.round((1 - _0x1c6179[3]) * 255 + _0x1c6179[3] * _0x1c6179[1]);
            var _0x14be06 = Math["round"]((1 - _0x1c6179[3]) * 255 + _0x1c6179[3] * _0x1c6179[2]);
            return "rgb(" + _0x5c50b7 + "," + _0x453957 + "," + _0x14be06 + ")";
        },
        getColor: function (_0x894b06) {
            if (typeof _0x39f824 !== "undefined" && _0x39f824 === "ie8") {
                var _0x574e2a = _0x894b06["split"](",");
                for (var _0x2a4991 = 0; _0x2a4991 < _0x574e2a["length"]; _0x2a4991++) {
                    _0x574e2a[_0x2a4991] = Number(_0x574e2a[_0x2a4991]);
                }
                return constants.util["getRGBAtoRGB"](_0x574e2a);
            } else {
                return "rgba(" + _0x894b06 + ")";
            }
        },
        getObject: function (hmmm) {
            if (objects[hmmm] !== undefined) {
                return objects[hmmm];
            }
        },
        IsJsonString: function (_0x3ba033) {
            try {
                JSON["parse"](_0x3ba033);
            } catch (_0x510dc8) {
                return false;
            }
            return true;
        },
        confExtractorFrmURI: function () {
            var _0x2995a3 = {};
            var _0x193f29 = document["location"]["href"]["replace"](/^[^\?]+\??/, "");
            var _0x134724 = _0x193f29["split"]("&");
            for (var _0x5baca7 = 0; _0x5baca7 < _0x134724.length; _0x5baca7++) {
                var _0x37e0b8 = _0x134724[_0x5baca7]["split"]("=");
                _0x2995a3[_0x37e0b8[0]] = decodeURIComponent(_0x37e0b8[1]);
            }
            return _0x2995a3;
        },
        assign: function (_0x5cfb6a) {
            var _0x58f2a3 = JSON["parse"](JSON["stringify"](_0x5cfb6a, function (_0xbf2fab, _0x13eb92) {
                if (typeof _0x13eb92 === "function") {
                    return _0x13eb92["toString"]();
                } else {
                    return _0x13eb92;
                }
            }));
            for (var _0x39a023 in _0x58f2a3) {
                if (typeof _0x58f2a3[_0x39a023] == "string" && _0x58f2a3[_0x39a023]["indexOf"]("function") >= 0) {
                    _0x58f2a3[_0x39a023] = new Function("return (" + _0x58f2a3[_0x39a023] + ")")();
                }
            }
            return _0x58f2a3;
        },
        constructURI: function (_0x1e8550, _0x151b2c) {
            var _0x3b017b = "";
            var _0x5276a4 = constants["api"]["request"]["getAPIURL"](_0x151b2c);
            for (var _0x271d0c in _0x1e8550) {
                var _0x13c918 = _0x1e8550[_0x271d0c];
                _0x3b017b += encodeURIComponent(_0x271d0c) + "=" + encodeURIComponent(_0x13c918) + "&";
            }
            if (_0x3b017b["length"] > 0) {
                _0x3b017b = _0x3b017b["substring"](0, _0x3b017b.length - 1);
                return _0x5276a4 + "?" + _0x3b017b;
            } else {
                return _0x5276a4;
            }
        },
        generateSessionGUID: function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"["replace"](/[xy]/g, function (_0x41ed71) {
                var _0x1982c3 = Math["random"]() * 16 | 0;
                var _0x4ae82a = _0x41ed71 === "x" ? _0x1982c3 : _0x1982c3 & 3 | 8;
                return _0x4ae82a.toString(16);
            });
        },
        overlayConf: function (_0x21ba9b, _0x440c83) {
            for (var _0x479b60 in _0x21ba9b) {
                if (typeof _0x440c83[_0x479b60] === "undefined") {
                    continue;
                } else if (typeof _0x21ba9b[_0x479b60] === typeof _0x440c83[_0x479b60]) {
                    _0x21ba9b[_0x479b60] = _0x440c83[_0x479b60];
                }
            }
            return _0x21ba9b;
        },
        clearAnimation: function (_0x478c12) {
            _0x478c12["style"]["-webkit-animation"] = "";
            _0x478c12["style"]["-moz-animation"] = "";
            _0x478c12["style"]["-o-animation"] = "";
            _0x478c12["style"]["animation"] = "";
        },
        doAnimation: function (_0x41af72, _0x36c4e9) {
            this["clearAnimation"](_0x41af72);
            setTimeout(function () {
                _0x41af72["style"]["-webkit-animation"] = _0x36c4e9;
                _0x41af72.style["-moz-animation"] = _0x36c4e9;
                _0x41af72.style["-o-animation"] = _0x36c4e9;
                _0x41af72["style"]["animation"] = _0x36c4e9;
            }, 20);
        },
        isMiniWidget: function (_0xa9c080) {
            if (_0xa9c080["widgetSize"] === constants["constant"]["mini"]) {
                true;
            } else {
                false;
            }
        },
        widgetHeightChange: function (_0xcb43bf) {
            var _0x14e781 = document["getElementById"]("mtcap-main-" + _0xcb43bf["counter"])["scrollHeight"] + "px";
            if (_0x172f59 !== _0x14e781) {
                _0x172f59 = _0x14e781;
                constants.postMessage(_0xcb43bf, "widgetheightchange", {
                    h: _0x14e781,
                    msg: "Captcha rendered"
                });
            }
        },
        isAudioPlay: function (_0x39f3d9) {
            if (_0x39f3d9["prevStatusMsg"] === _0x39f3d9["langTxt"]["audioPlay"]) {
                return true;
            } else {
                return false;
            }
        },
        isAudioPlaying: function (_0x360022) {
            if (_0x360022.prevStatusMsg === _0x360022["langTxt"]["audioPlaying"]) {
                return true;
            } else {
                return false;
            }
        },
        isAudioContinue: function (_0x59a107) {
            if (_0x59a107["prevStatusMsg"] === _0x59a107["langTxt"].continueAudio) {
                return true;
            } else {
                return false;
            }
        },
        showTouchRippleAtPos: function (_0x2d1c14, _0x5e7fde, _0x156b65) {
            var _0x12f4c5 = _0x2d1c14 + "::" + _0x5e7fde;
            var _0x221be8 = Date.now();
            if (_0x221be8 - _0x211fa3 < 650 && _0x12f4c5 === _0x23f64f) {
                return;
            }
            _0x211fa3 = _0x221be8;
            var _0x260e84 = document["getElementById"]("mtcap-ripple-" + _0x156b65["counter"]);
            _0x23f64f = _0x12f4c5;
            _0x260e84["style"]["left"] = _0x2d1c14 + "px";
            _0x260e84["style"].top = _0x5e7fde + "px";
            constants.util["doAnimation"](_0x260e84, "mt-ripple-kf 0.6s linear");
        },
        updateAriaMessageState: function (_0x31eaee) {
            var _0x1523b2 = constants["status"]["code"];
            var _0x552f15 = constants.UI.e[_0x33a29e["widgetInstance"]];
            switch (_0x31eaee) {
                case _0x1523b2["internal"]["CAPTCHA_LOADED"]:
                    this["updateAriaMessage"](_0x552f15.privacyLink, _0x33a29e.ariaTxt["default"]["privacyLink"], true, true);
                    this.updateAriaMessage(_0x552f15["termsLink"], _0x33a29e["ariaTxt"].default["termsLink"], true, true);
                    this["updateAriaMessage"](_0x552f15["ariaAudio"], _0x33a29e["ariaTxt"]["default"].audioButton, false, true);
                    this.updateAriaMessage(_0x552f15["imageContainer"], _0x33a29e["ariaTxt"]["default"]["image"], true, true);
                    this["updateAriaMessage"](_0x552f15.noCssImage, _0x33a29e["ariaTxt"]["default"]["image"], true, true);
                    this["updateAriaMessage"](_0x552f15["ariaInput"], _0x33a29e.ariaTxt.default.inputTextForm, false, false);
                    this.updateAriaMessage(_0x552f15["ariaStatus"], _0x33a29e["ariaTxt"].default["statusButton"], false, false);
                    this["updateAriaMessage"](_0x552f15.ariaCaptchaStatus, "", false, false);
                    break;
                case _0x1523b2.internal["AUDIO_DOWNLOADING"]:
                    break;
                case _0x1523b2["internal"]["AUDIO_PLAYING"]:
                    break;
                case _0x1523b2["internal"]["LOADING_NEW"]:
                    break;
                case _0x1523b2["internal"]["RELOADING_NEW"]:
                    this.updateAriaMessage(_0x552f15.ariaCaptchaStatus, _0x33a29e["ariaTxt"]["loadingNew"]["statusButton"], false, false);
                    break;
                case _0x1523b2.internal["CAPTCHA_NEWLY_LOADED"]:
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], _0x33a29e["ariaTxt"]["captchaNewlyLoaded"]["statusButton"], false, false);
                    break;
                case _0x1523b2["internal"]["CAPTCHA_SOLUTION_INCOMPLETE"]:
                    this["updateAriaMessage"](_0x552f15.ariaCaptchaStatus, _0x33a29e.ariaTxt["challengeIncomplete"].inputTextForm, false, false);
                    break;
                case _0x1523b2["internal"].VERIFIYING_INPUT:
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], _0x33a29e["ariaTxt"].verifyingInput.statusButton, false, false);
                    break;
                case _0x1523b2["internal"]["VALIDATION_FAILED"]:
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], _0x33a29e["ariaTxt"]["validationFailed"]["statusButton"], false, false);
                    break;
                case _0x1523b2["internal"]["VALIDATION_SUCCESS"]:
                    this["updateAriaMessage"](_0x552f15["ariaInput"], _0x33a29e.ariaTxt["validationSuccess"]["inputTextForm"], false, true);
                    this["updateAriaMessage"](_0x552f15["ariaStatus"], _0x33a29e["ariaTxt"].validationSuccess["statusButton"], false, true);
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], _0x33a29e["ariaTxt"]["validationSuccess"]["statusButton"], false);
                    break;
                case _0x1523b2["internal"]["TOKEN_TIMEOUT"]:
                    this["updateAriaMessage"](_0x552f15.ariaAudio, _0x33a29e.ariaTxt["tokenTimeOut"]["audioButton"], false, false);
                    this["updateAriaMessage"](_0x552f15["inputText"], _0x33a29e["ariaTxt"].tokenTimeOut["inputTextForm"], true, false);
                    this["updateAriaMessage"](_0x552f15["ariaStatus"], _0x33a29e["ariaTxt"]["tokenTimeOut"]["statusButton"], false, false);
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], _0x33a29e["ariaTxt"].tokenTimeOut.statusButton, false, false);
                    break;
                case _0x1523b2["internal"]["ERROR"]:
                    this["updateAriaMessage"](_0x552f15["privacyLink"], _0x33a29e["ariaTxt"]["default"]["privacyLink"], true, true);
                    this["updateAriaMessage"](_0x552f15.termsLink, _0x33a29e.ariaTxt["default"]["termsLink"], true, true);
                    this["updateAriaMessage"](_0x552f15["ariaAudio"], "", false, true);
                    this.updateAriaMessage(_0x552f15.imageContainer, "", true, true);
                    this["updateAriaMessage"](_0x552f15["noCssImage"], "", true, true);
                    this["updateAriaMessage"](_0x552f15["inputText"], "", true, true);
                    this["updateAriaMessage"](_0x552f15["ariaStatus"], "", false, true);
                    this["updateAriaMessage"](_0x552f15["ariaCaptchaStatus"], "", false, true);
                    break;
            }
        },
        updateAriaMessage: function (_0x273283, _0x2c3179, _0x1c2899, _0x3c62ad) {
            if (!_0x273283 || _0x2c3179 === undefined && _0x2c3179 === null) {
                return;
            }
            if (_0x1c2899) {
                if (_0x273283.getAttribute("aria-label") !== _0x2c3179) {
                    if (new Date()["getTime"]() - _0x1cad37 < 2100 && !_0x3c62ad) {
                        _0x4a64f7 += 1000;
                    } else {
                        _0x4a64f7 = 0;
                    }
                    setTimeout(function () {
                        _0x273283["setAttribute"]("aria-label", _0x2c3179);
                    }, _0x4a64f7);
                    _0x1cad37 = new Date()["getTime"]();
                }
            } else if (_0x273283.innerHTML !== _0x2c3179) {
                if (new Date()["getTime"]() - _0x1cad37 < 2100 && !_0x3c62ad) {
                    _0x4a64f7 += 1000;
                } else {
                    _0x4a64f7 = 0;
                }
                setTimeout(function () {
                    _0x273283.innerHTML = _0x2c3179;
                }, _0x4a64f7);
                _0x1cad37 = new Date()["getTime"]();
            }
        },
        updateUI: function (_0x4252d8) {
            var _0x308d0e = constants["status"]["code"];
            var _0x103fff = constants.UI.e[_0x33a29e.widgetInstance];
            var _0x148526 = constants.UI["events"];
            switch (_0x4252d8) {
                case _0x308d0e["internal"]["CAPTCHA_LOADED"]:
                    break;
                case _0x308d0e.internal.AUDIO_DOWNLOADING:
                    _0x148526["audio"]["update"](4);
                    break;
                case _0x308d0e["internal"]["AUDIO_PLAYING"]:
                    _0x103fff.audio["style"]["color"] = constants["style"].iconColors["audiofocus"];
                    break;
                case _0x308d0e["internal"]["LOADING_NEW"]:
                    if (_0x33a29e.widgetSize === constants["constant"]["mini"]) {
                        _0x103fff["main"]["style"]["maxWidth"] = constants["constant"]["maxMiniWidth"];
                    }
                    break;
                case _0x308d0e["internal"]["RELOADING_NEW"]:
                    _0x148526.status["toggleImg"](_0x33a29e, 4);
                    _0x103fff["inputText"]["value"] = "";
                    _0x148526["status"].rotateImg(true);
                    if (_0x33a29e["challengeType"] !== "imageonly") {
                        if (_0x33a29e["widgetSize"] === constants["constant"].standard) {
                            _0x103fff["audio"]["style"]["color"] = constants["style"]["iconColors"]["audio"];
                        } else {
                            _0x103fff["audio"].style["color"] = constants["style"]["miniIconColors"]["audio"];
                        }
                    }
                    constants["widget"].disable(_0x33a29e["widgetInstance"], true);
                    if (_0x33a29e.challengeType !== "imageonly" && _0x148526["audio"]["status"] === 1) {
                        if (_0x33a29e.widgetSize === constants.constant.standard) {
                            _0x103fff["audio"]["style"]["color"] = constants["style"]["iconColors"]["audio"];
                        } else {
                            _0x103fff.audio["style"]["color"] = constants["style"]["miniIconColors"].audio;
                        }
                        _0x103fff["audioContainer"]["pause"]();
                        _0x148526.audio["status"] = 0;
                    }
                    break;
                case _0x308d0e.internal["CAPTCHA_SOLUTION_INCOMPLETE"]:
                    _0x148526["status"]["showIncomplete"](_0x33a29e);
                    break;
                case _0x308d0e.internal.VERIFIYING_INPUT:
                    _0x148526["status"]["showStatusMsg"](_0x33a29e, 1, _0x33a29e["langTxt"]["verifying"]);
                    _0x148526["status"]["toggleImg"](_0x33a29e, 1);
                    _0x148526["status"]["rotateImg"](true);
                    break;
                case _0x308d0e["internal"]["VALIDATION_FAILED"]:
                    if (_0x33a29e["challengeType"] !== "imageonly") {
                        _0x148526.audio["toggleImg"](_0x33a29e, false, 0);
                    }
                    _0x148526["status"]["showStatusMsg"](_0x33a29e, 2, _0x33a29e["langTxt"].verifyFail);
                    _0x148526.status["toggleImg"](_0x33a29e, 3);
                    constants["widget"].disable(_0x33a29e.widgetInstance, true);
                    break;
                case _0x308d0e["internal"]["VALIDATION_SUCCESS"]:
                    _0x148526["status"]["toggleImg"](_0x33a29e, 2);
                    _0x148526["status"].showStatusMsg(_0x33a29e, 1, _0x33a29e["langTxt"]["verifySuccess"]);
                    constants.widget["disable"](_0x33a29e["widgetInstance"], true);
                    setTimeout(function () {
                        constants.UI.e[_0x33a29e["widgetInstance"]].inputText["blur"]();
                    }, 3000);
                    break;
                case _0x308d0e["internal"]["TOKEN_TIMEOUT"]:
                    constants["widget"]["userReset"](_0x33a29e, _0x33a29e.langTxt.verifyExpired);
                    break;
                case _0x308d0e["internal"].ERROR:
                    if (!_0x33a29e["widgetEnabled"]) {
                        constants.UI.renderCaptcha(_0x33a29e);
                        constants["util"]["widgetHeightChange"](_0x33a29e);
                    }
                    _0x103fff = constants.UI.e[_0x33a29e["widgetInstance"]];
                    if (_0x33a29e.widgetSize === constants.constant.standard) {
                        _0x103fff["errCard"]["style"]["display"] = "block";
                        _0x103fff["errCard"]["style"].zIndex = "5";
                        _0x103fff["stsBtn"]["style"]["position"] = "absolute";
                        constants["util"].widgetHeightChange(_0x33a29e);
                    }
                    constants.widget["disable"](_0x33a29e["widgetInstance"], true);
                    _0x148526["status"]["showStatusMsg"](_0x33a29e, 0);
                    _0x148526["status"]["rotateImg"](false);
                    break;
            }
        },
        canShowText: function (_0x396480, _0x2722a3, _0x10a05d, _0x1feb4e) {
            return _0x396480 || _0x2722a3 || _0x10a05d;
        },
        canHideText: function (_0x2722a3, _0x10a05d, _0x1feb4e, _0x20846b) {
            return !_0x2722a3 && !_0x10a05d && _0x1feb4e && !_0x20846b;
        }
    };
    constants["theme"] = {
        overcast: {
            cardColor: "#F5F5F5",
            cardShadowColor: constants["util"]["getColor"]("0,0,0,0.13"),
            cardBorder: "1px solid white",
            inputBackgroundColor: "#F8F8F8"
        },
        neowhite: {
            inputTextColor: "#444444",
            placeHolderColor: "#999999",
            msgTextColor: "#777777",
            invalidMsgTextColor: "#F74E39",
            inputBorderColor: {
                byDefault: "white",
                hover: "white",
                active: "white"
            }
        },
        goldbezel: {
            cardBorder: "3px solid #DDCCAA",
            inputBorderColor: {
                byDefault: "#CCBBAA",
                hover: "#AA9988",
                active: "#AA9988"
            },
            buttonIconColor: {
                audio: "#333333",
                audiofocus: "#AA9988"
            }
        },
        blackmoon: {
            cardColor: "#393C44",
            cardShadowColor: constants["util"]["getColor"]("0,0,0,0.07"),
            cardBorder: "1px solid #30333C",
            inputTextColor: "#DDDDDD",
            placeHolderColor: "#BBBBBB",
            msgTextColor: "#222222",
            invalidMsgTextColor: "#FF7500",
            inputBorderColor: {
                byDefault: "#999999",
                hover: "#BABABA",
                active: "#BBAA99"
            },
            inputBackgroundColor: constants.util.getColor("255,255,255,0.1"),
            buttonIconColor: {
                refresh: "#DDDDDD",
                verify: "#55CAF1",
                audio: "#DDDDDD",
                audiofocus: "#FFFFFF"
            }
        },
        darkruby: {
            cardColor: "#33383B",
            inputTextColor: "#33383B",
            placeHolderColor: "#90060B",
            inputBorderColor: {
                byDefault: "#773333",
                hover: "#222222",
                active: "#222222"
            },
            inputBackgroundColor: "#E7362B",
            buttonIconColor: {
                verify: "#65DAF1",
                fail: "#FFBBBB",
                audio: "#E7362B",
                audiofocus: "#ff5555"
            }
        },
        touchoforange: {
            cardColor: "#F5F5F5",
            cardBorder: "#9EA1A0",
            inputTextColor: "#F87800",
            placeHolderColor: "#F89300",
            inputBorderColor: {
                byDefault: "#F89300",
                hover: "#F07000",
                active: "#F07000"
            },
            buttonIconColor: {
                audio: "#F89300",
                audiofocus: "#F07000"
            },
            inputBackgroundColor: "#FAFAFA"
        },
        caribbean: {
            cardColor: "#C8E8F1",
            cardShadowColor: constants["util"]["getColor"]("0,0,0,0.13"),
            cardBorder: "#9B9CA2",
            inputTextColor: "#333333",
            placeHolderColor: "#767676",
            inputBorderColor: {
                byDefault: "#7B7C82",
                hover: "#3B3C42",
                active: "#3B3C42"
            },
            inputBackgroundColor: "#F0F7F7"
        },
        woodyallen: {
            cardColor: "#D1C9CA",
            cardShadowColor: constants["util"]["getColor"]("0,0,0,0.13"),
            cardBorder: "#9B9CA2",
            inputTextColor: "#333333",
            placeHolderColor: "#767676",
            inputBorderColor: {
                byDefault: "#7B7C82",
                hover: "#3B3C42",
                active: "#3B3C42"
            },
            inputBackgroundColor: constants["util"]["getColor"]("245,255,255,0.6"),
            buttonIconColor: {
                audio: "#000000",
                audiofocus: "#335500"
            }
        },
        chrome: {
            cardBGGradient: "-15deg,#FCFCFC, #FCFCFC 27%, #C0C0C0",
            buttonIconColor: {
                audio: "#000000",
                audiofocus: "#555555"
            }
        },
        highcontrast: {
            inputTextColor: "#222222",
            placeHolderColor: "#404040",
            msgTextColor: "#404040",
            invalidMsgTextColor: "#FF0000",
            cardShadowColor: constants["util"].getColor("0,0,0,0.3")
        }
    };
    constants["miniTheme"] = {
        overcast: {
            cardColor: "#F5F5F5",
            cardBorder: "1px solid #DDDDDD",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputBackgroundColor: "#F5F5F5",
            inputBorderColor: {
                byDefault: "#DDDDDD",
                hover: "#26A0DA",
                active: "#26A0DA"
            }
        },
        neowhite: {
            inputTextColor: "#444444",
            cardBorder: "1px solid #E0E0E0",
            cardBorderRadius: 0,
            cardShadowColor: "",
            placeHolderColor: "#999999",
            msgTextColor: "#777777",
            invalidMsgTextColor: "#F74E39",
            inputBorderColor: {
                byDefault: "#E0E0E0",
                hover: "#B8B8B8",
                active: "#B8B8B8"
            }
        },
        goldbezel: {
            cardBorder: "3px solid #DDCCAA",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputBorderColor: {
                byDefault: "#DDCCAA",
                hover: "#AA9988",
                active: "#AA9988"
            },
            buttonIconColor: {
                refresh: "#757575",
                audio: "#757575",
                audiofocus: "#AA9988"
            }
        },
        blackmoon: {
            cardColor: "#393C44",
            cardBorder: "2px solid #41454E",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#DDDDDD",
            placeHolderColor: "#BBBBBB",
            msgTextColor: "#222222",
            invalidMsgTextColor: "#FF7500",
            inputBorderColor: {
                byDefault: "#41454E",
                hover: "#BABABA",
                active: "#BABABA"
            },
            inputBackgroundColor: "#393C44",
            buttonIconColor: {
                refresh: "#DDDDDD",
                verify: "#55CAF1",
                audio: "#DDDDDD",
                audiofocus: "#FFFFFF"
            }
        },
        darkruby: {
            cardColor: "#E7362B",
            cardBorder: "1px solid #33383B",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#33383B",
            placeHolderColor: "#90060B",
            inputBorderColor: {
                byDefault: "#33383B",
                hover: "#AD2920",
                active: "#AD2920"
            },
            inputBackgroundColor: "#E7362B",
            buttonIconColor: {
                refresh: "#3A4044",
                verify: "#65DAF1",
                fail: "#FFBBBB",
                audio: "#3A4044",
                audiofocus: "#DDDDDD"
            }
        },
        touchoforange: {
            cardColor: "#F5F5F5",
            cardBorder: "1px solid #F89300",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#F87800",
            placeHolderColor: "#F89300",
            inputBorderColor: {
                byDefault: "#F89300",
                hover: "#F07000",
                active: "#F07000"
            },
            buttonIconColor: {
                refresh: "#F89300",
                audio: "#F89300",
                audiofocus: "#F07000",
                fail: "#FFBBBB",
                verify: "#65DAF1"
            },
            inputBackgroundColor: "#F5F5F5"
        },
        caribbean: {
            cardColor: "#C8E8F1",
            cardBorder: "1px solid #9B9CA2",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#333333",
            placeHolderColor: "#767676",
            inputBorderColor: {
                byDefault: "#9B9CA2",
                hover: "#3B3C42",
                active: "#3B3C42"
            },
            inputBackgroundColor: "#C8E8F1"
        },
        woodyallen: {
            cardColor: "#D1C9CA",
            cardBorder: "1px solid #9B9CA2",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#333333",
            placeHolderColor: "#767676",
            inputBorderColor: {
                byDefault: "#9B9CA2",
                hover: "#3B3C42",
                active: "#3B3C42"
            },
            inputBackgroundColor: "#D1C9CA",
            buttonIconColor: {
                refresh: "#000000",
                audio: "#000000",
                audiofocus: "#335500",
                fail: "#FF3200",
                verify: "#35AAD1"
            }
        },
        highcontrast: {
            inputTextColor: "#222222",
            cardBorder: "1px solid #888888",
            cardBorderRadius: 0,
            cardShadowColor: "",
            placeHolderColor: "#404040",
            msgTextColor: "#404040",
            invalidMsgTextColor: "#FF0000",
            buttonIconColor: {
                refresh: "#333333",
                audio: "#333333",
                audiofocus: "#26A0DA"
            },
            inputBorderColor: {
                byDefault: "#888888",
                hover: "#26A0DA",
                active: "#26A0DA"
            }
        }
    };
    constants["style"] = {
        defaults: {
            showCard: true,
            cardColor: "#FFFFFF",
            cardShadowColor: constants["util"]["getColor"]("0,0,0,0.16"),
            cardBorder: constants.util["getColor"]("0,0,0,0.12"),
            inputTextColor: "#555555",
            inputTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
            placeHolderColor: "#999999",
            msgTextColor: "#888888",
            invalidMsgTextColor: "#FF0000",
            msgTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
            inputBackgroundColor: "#FFFFFF",
            inputBorderColor: {
                byDefault: "#888888",
                hover: "#26A0DA",
                active: "#000000"
            },
            buttonIconColor: {
                refresh: "#333333",
                verify: "#35AAD1",
                success: "#00EE00",
                fail: "#FF3200",
                audio: "#333333",
                audiofocus: "#26A0DA"
            }
        },
        miniDefaults: {
            showCard: true,
            cardColor: "#FFFFFF",
            cardBorder: "1px solid #888888",
            cardBorderRadius: 0,
            cardShadowColor: "",
            inputTextColor: "#555555",
            inputTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
            placeHolderColor: "#999999",
            msgTextColor: "#888888",
            invalidMsgTextColor: "#FF0000",
            msgTextFont: "'Verdana', 'Arial', 'Helvetica', 'sans-serif'",
            inputBackgroundColor: "#FFFFFF",
            inputBorderColor: {
                byDefault: "#888888",
                hover: "#26A0DA",
                active: "#000000"
            },
            buttonIconColor: {
                refresh: "#757575",
                verify: "#35AAD1",
                success: "#00EE00",
                fail: "#FF3200",
                audio: "#757575",
                audiofocus: "#26A0DA"
            }
        },
        iconColors: {
            refresh: "#333333",
            verify: "#35AAD1",
            success: "#00EE00",
            fail: "#FF3200",
            audio: "#333333",
            audiofocus: "#26A0DA"
        },
        miniIconColors: {
            refresh: "#757575",
            verify: "#35AAD1",
            success: "#00EE00",
            fail: "#FF3200",
            audio: "#757575",
            audiofocus: "#26A0DA"
        },
        validateCustomCSSConf: function (_0x4077a7) {
            if (constants["util"]["isObject"](_0x4077a7["customStyle"])) {
                var _0x24e89f = "";
                var _0x3d6d4f = false;
                for (var _0x5c542a = 0; _0x5c542a < Object.keys(_0x4077a7.customStyle)["length"]; _0x5c542a++) {
                    _0x24e89f = /^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g;
                    var _0x5305bc = _0x4077a7.customStyle[Object.keys(_0x4077a7["customStyle"])[_0x5c542a]];
                    if (constants["util"]["isString"](_0x5305bc)) {
                        if (!_0x24e89f["test"](_0x5305bc)) {
                            _0x3d6d4f = true;
                        } else if (_0x5305bc["length"] > 90) {
                            constants.log["warn"](_0x4077a7, "Maximum allowed customStyle value is 90 characters");
                            _0x5305bc = _0x5305bc["substring"](0, 90);
                        }
                    } else if (constants["util"]["isObject"](_0x5305bc)) {
                        for (var _0x3ccf12 = 0; _0x3ccf12 < Object["keys"](_0x5305bc)["length"]; _0x3ccf12++) {
                            if (constants["util"]["isString"](_0x5305bc[Object.keys(_0x5305bc)[_0x3ccf12]])) {
                                _0x24e89f = /^[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]+[0-9A-Za-z_\#\-\'\(\)\.\,\s\%]*$/g;
                                if (!_0x24e89f["test"](_0x5305bc[Object["keys"](_0x5305bc)[_0x3ccf12]])) {
                                    _0x3d6d4f = true;
                                } else if (_0x5305bc[Object.keys(_0x5305bc)[_0x3ccf12]]["length"] > 90) {
                                    constants["log"]["warn"](_0x4077a7, "Maximum allowed customStyle value is 90 characters");
                                    _0x5305bc[Object["keys"](_0x5305bc)[_0x3ccf12]] = _0x5305bc[Object["keys"](_0x5305bc)[_0x3ccf12]]["substring"](0, 90);
                                }
                            } else if (!constants["util"]["isBolean"](_0x5305bc)) {
                                _0x3d6d4f = true;
                            }
                        }
                    } else if (!constants.util.isBolean(_0x5305bc)) {
                        _0x3d6d4f = true;
                    }
                }
                if (_0x3d6d4f) {
                    _0x4077a7.customStyle = this["defaults"]["customStyle"];
                    constants.log.warn(_0x4077a7, _0x4077a7, "Entered invalid characters in customStyle");
                }
            } else {
                _0x4077a7["customStyle"] = this["defaults"].customStyle;
                constants["log"]["warn"](_0x4077a7, _0x4077a7, "Entered invalid characters in customStyle");
            }
        },
        apply: function (_0x349351) {
            if (_0x349351.theme === "basic" && _0x349351.customStyle === undefined) {
                return;
            }
            if (_0x349351["widgetSize"] === constants.constant["standard"] && constants["theme"].hasOwnProperty(_0x349351["theme"])) {
                var _0x5ea345 = constants["util"]["assign"](this["defaults"]);
                var _0x33cd42 = constants["util"]["overlayConf"](_0x5ea345, constants.theme[_0x349351.theme]);
                this.set(_0x349351, _0x33cd42);
            } else if (_0x349351.widgetSize === constants["constant"].mini && constants["miniTheme"]["hasOwnProperty"](_0x349351.theme)) {
                var _0x5ea345 = constants.util["assign"](this.miniDefaults);
                var _0x33cd42 = constants["util"]["overlayConf"](_0x5ea345, constants["miniTheme"][_0x349351["theme"]]);
                this["set"](_0x349351, _0x33cd42);
            }
            if (_0x349351["customStyle"] !== undefined) {
                this["set"](_0x349351, _0x349351["customStyle"]);
            }
        },
        set: function (_0x4092e2, _0x1bcc0d) {
            var _0x19c4ed = constants.UI.e[_0x4092e2["widgetInstance"]];
            for (var _0x2c2168 in _0x1bcc0d) {
                switch (_0x2c2168) {
                    case "showCard":
                        this["setShowCard"](_0x19c4ed["card"], _0x1bcc0d[_0x2c2168]);
                        break;
                    case "cardColor":
                        this["setCardColor"](_0x19c4ed, _0x1bcc0d[_0x2c2168], _0x4092e2["widgetSize"]);
                        if (_0x4092e2["challengeType"] != "imageonly") {
                            this["setAudioControlColor"](_0x19c4ed, _0x1bcc0d[_0x2c2168], _0x4092e2.widgetSize);
                        }
                        break;
                    case "cardShadowColor":
                        this["setCardShadowColor"](_0x19c4ed, _0x1bcc0d[_0x2c2168]);
                        break;
                    case "cardBorder":
                        this["setCardBorder"](_0x19c4ed, _0x1bcc0d[_0x2c2168], _0x4092e2.widgetSize);
                        break;
                    case "inputTextColor":
                        this["setInputTextColor"](_0x1bcc0d[_0x2c2168]);
                        break;
                    case "inputTextFont":
                        this.setInputTextFontFamily(_0x1bcc0d[_0x2c2168]);
                        break;
                    case "placeHolderColor":
                        this["setPlaceHolderColor"](_0x1bcc0d[_0x2c2168]);
                        break;
                    case "msgTextColor":
                        this.setMsgColor(_0x1bcc0d[_0x2c2168]);
                        break;
                    case "invalidMsgTextColor":
                        this.setInvalidMsgTextColor(_0x1bcc0d[_0x2c2168]);
                        break;
                    case "msgTextFont":
                        this.setMsgFontFamily(_0x19c4ed["msg"], _0x1bcc0d[_0x2c2168]);
                        break;
                    case "inputBackgroundColor":
                        this.setInputBackgoundColor(_0x19c4ed, _0x1bcc0d[_0x2c2168]);
                        break;
                    case "inputBorderColor":
                        this["setInputBorderColor"](_0x1bcc0d[_0x2c2168]);
                        break;
                    case "buttonIconColor":
                        this["setButtonIconColors"](_0x4092e2, _0x1bcc0d[_0x2c2168]);
                        break;
                    case "cardBorderRadius":
                        this["setCardBorderRadius"](_0x19c4ed, _0x1bcc0d);
                        break;
                }
            }
        },
        addToStyleSheet: function (_0x21a437) {
            var _0xacf0db = document["createElement"]("style");
            if (_0xacf0db["styleSheet"]) {
                _0xacf0db["styleSheet"]["cssText"] = _0x21a437;
            } else {
                _0xacf0db["appendChild"](document.createTextNode(_0x21a437));
            }
            ;
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0])["appendChild"](_0xacf0db);
        },
        setButtonIconColors: function (_0x44213a, _0x578369) {
            if (_0x44213a.widgetSize === constants["constant"]["standard"]) {
                if (_0x578369.refresh) {
                    this["iconColors"]["refresh"] = _0x578369.refresh;
                }
                if (_0x578369["verify"]) {
                    this["iconColors"].verify = _0x578369["verify"];
                }
                if (_0x578369["success"]) {
                    this["iconColors"]["success"] = _0x578369["success"];
                }
                if (_0x578369["fail"]) {
                    this["iconColors"]["fail"] = _0x578369["fail"];
                }
                if (_0x578369["audio"]) {
                    this["iconColors"].audio = _0x578369["audio"];
                }
                if (_0x578369["audiofocus"]) {
                    this["iconColors"]["audiofocus"] = _0x578369["audiofocus"];
                }
            } else {
                if (_0x578369["refresh"]) {
                    this["miniIconColors"]["refresh"] = _0x578369["refresh"];
                }
                if (_0x578369["verify"]) {
                    this["miniIconColors"].verify = _0x578369["verify"];
                }
                if (_0x578369.success) {
                    this.miniIconColors["success"] = _0x578369["success"];
                }
                if (_0x578369["fail"]) {
                    this.miniIconColors["fail"] = _0x578369.fail;
                }
                if (_0x578369["audio"]) {
                    this["miniIconColors"]["audio"] = _0x578369.audio;
                }
                if (_0x578369["audiofocus"]) {
                    this["miniIconColors"].audiofocus = _0x578369.audiofocus;
                }
            }
            constants.UI["events"]["status"]["toggleImg"](_0x44213a, 0);
            if (_0x44213a["challengeType"] != "imageonly") {
                this["setAudioCtrlIconColor"](_0x44213a);
            }
        },
        setAudioCtrlIconColor: function (_0x22859b) {
            var _0x456dc7 = constants.UI.e[_0x22859b["widgetInstance"]];
            if (_0x22859b.widgetSize === constants.constant.standard) {
                _0x456dc7["audio"]["style"].color = this["iconColors"]["audio"];
            } else {
                _0x456dc7["audio"]["style"]["color"] = this["miniIconColors"]["audio"];
                _0x456dc7["audio"]["style"]["borderRightColor"] = this["miniIconColors"]["audio"];
            }
        },
        setInputBorderColor: function (_0x15cad7) {
            var _0x4b0ad9 = ".mtcap-inputborder-custom{border-color:" + _0x15cad7["byDefault"] + ";}  .mtcap-inputborder-custom:hover{border-color:" + _0x15cad7.hover + ";}  " + ".mtcap-inputborder-custom:focus{border-color:" + _0x15cad7.active + ";}  " + ".mtcap-inputborder-custom:focus-within{border-color:" + _0x15cad7["active"] + ";}  " + ".mtcap-inputborder-custom:hover:active,mtcap-inputborder-custom:focus:active{border-color:" + _0x15cad7["active"] + ";}  ";
            this.addToStyleSheet(_0x4b0ad9);
        },
        setInputBackgoundColor: function (_0x120e88, _0x5607a5) {
            _0x120e88.inputbox["style"]["backgroundColor"] = _0x5607a5;
            if (_0x33a29e["widgetSize"] === "mini" && _0x33a29e.challengeType != "imageonly") {
                _0x120e88["audio"].style["backgroundColor"] = _0x5607a5;
                _0x120e88["audioControl"].style["backgroundColor"] = _0x5607a5;
            }
        },
        setMsgFontFamily: function (_0x353d12, _0x23c7de) {
            if (!_0x23c7de) {
                _0x23c7de = "'Verdana', 'Arial', 'Helvetica', 'sans-serif'";
            }
            _0x353d12["style"]["fontFamily"] = _0x23c7de;
        },
        setInputTextFontFamily: function (_0x5a2769) {
            if (!_0x5a2769) {
                _0x5a2769 = "'Verdana', 'Arial', 'Helvetica', 'sans-serif'";
            }
            var _0x553934 = "" + ".mtcap-inputtext-custom{font-family:" + _0x5a2769 + ";}  ";
            this["addToStyleSheet"](_0x553934);
        },
        setMsgColor: function (_0x442302) {
            var _0x1367c7 = "" + ".mtcap-msg-custom{color:" + _0x442302 + ";}  " + "a.mtcap-msglink-custom:link,a.mtcap-msglink-custom:visited,a.mtcap-msglink-custom:hover,a.mtcap-msglink-custom:active{color:" + _0x442302 + ";}  ";
            this["addToStyleSheet"](_0x1367c7);
        },
        setInvalidMsgTextColor: function (_0xb55260) {
            var _0x5861aa = "" + ".mtcap-invalidmsg-custom{color:" + _0xb55260 + ";}  ";
            this["addToStyleSheet"](_0x5861aa);
        },
        setInputTextColor: function (_0x319cf9) {
            var _0x196c87 = "" + ".mtcap-inputtext-custom{color:" + _0x319cf9 + ";}  ";
            this["addToStyleSheet"](_0x196c87);
        },
        setPlaceHolderColor: function (_0x40a3a0) {
            var _0x3f0234 = ".mtcap-inputtext-custom::placeholder{ opacity:1.0; color:" + _0x40a3a0 + "; }  " + ".mtcap-inputtext-custom::-ms-input-placeholder{ color:" + _0x40a3a0 + "; }  " + ".mtcap-inputtext-custom:-ms-input-placeholder{  color:" + _0x40a3a0 + "; }  ";
            this["addToStyleSheet"](_0x3f0234);
        },
        setShowCard: function (_0x2b2edf, _0x2a96ae) {
            if (_0x2a96ae === "false") {
                _0x2a96ae = false;
            }
            if (_0x2a96ae) {
                _0x2b2edf["style"].padding = _0x33a29e.widgetSize === constants["constant"]["mini"] ? "0px" : "5px";
                _0x2b2edf["style"]["boxShadow"] = "0 2px 2px 0 " + constants.util["getColor"]("0,0,0,0.16") + ",0 0 0 1px" + constants["util"].getColor("0,0,0,0.13");
                _0x2b2edf["style"].backgroundColor = "white";
            } else {
                _0x2b2edf.style.padding = "0px";
                _0x2b2edf["style"]["boxShadow"] = "none";
                _0x2b2edf["style"]["backgroundColor"] = constants.util["getColor"]("0,0,0,0");
            }
        },
        setCardColor: function (_0x26c799, _0x3eb766, _0xd724a8) {
            if (_0xd724a8 === constants["constant"]["mini"]) {
                _0x26c799["stsBox"].style.backgroundColor = _0x3eb766;
            } else {
                _0x26c799["card"]["style"]["backgroundColor"] = _0x3eb766;
            }
        },
        setAudioControlColor: function (_0x342151, _0x398735, _0xa5a90b) {
            if (_0xa5a90b === constants["constant"]["standard"]) {
                _0x342151["audioControlBG"]["style"].backgroundColor = _0x398735;
            }
        },
        setCardShadowColor: function (_0x44458e, _0x401141) {
            if (_0x401141) {
                _0x44458e["card"]["style"]["boxShadow"] = "0 2px 2px 0 " + _0x401141 + ",0 0 0 1px " + _0x401141;
            } else {
                _0x44458e["card"]["style"]["boxShadow"] = "none";
            }
        },
        setCardBorder: function (_0xb47666, _0xd12542, _0x595d6f) {
            var _0x5edcac = constants["util"].getColorFromBorder(_0xd12542);
            if (_0x595d6f === constants["constant"]["mini"] && _0x5edcac && _0xd12542) {
                var _0xc83954 = _0xd12542.split(" ");
                var _0xb3e884 = parseInt(_0xc83954[0]["match"](/-?\d+/));
                if (_0xc83954["length"] === 3 && !isNaN(_0xb3e884) && _0xc83954[1]["toLowerCase"]() === "solid") {
                    if (_0xb3e884 > constants.constant["miniMaxBorderWidth"]) {
                        _0xb3e884 = constants["constant"]["miniMaxBorderWidth"];
                        constants["log"]["warn"](_0x33a29e, "The maximum bordered pixel value for mini is 5px");
                    } else if (_0xb3e884 < constants.constant["miniMinBorderWidth"]) {
                        constants["log"]["warn"](_0x33a29e, "The minimum bordered pixel value for mini is 1px");
                        _0xb3e884 = constants["constant"]["miniMinBorderWidth"];
                    }
                    _0xd12542 = _0xb3e884 + "px " + _0xc83954[1] + " " + _0xc83954[2];
                } else {
                    _0xd12542 = constants["style"]["miniDefaults"]["cardBorder"];
                    constants.log["warn"](_0x33a29e, "Entered invalid characters in container border for Modern Mini");
                }
                _0xb47666.card.style["border"] = _0xd12542;
                _0xb47666.imageContainer["style"]["borderColor"] = _0x5edcac;
                if (_0x33a29e["challengeType"] != "imageonly") {
                    _0xb47666["audioControl"]["style"]["borderColor"] = _0x5edcac;
                }
            } else if (_0x595d6f !== constants["constant"].mini && _0xd12542) {
                _0xb47666.card.style["border"] = _0xd12542;
            } else {
                _0xb47666["style"]["border"] = "0px none";
            }
        },
        setCardBGGradient: function (_0x1cd9c1, _0x54dab0) {
            var _0x1648d8 = _0x1cd9c1["card"];
            var _0x53b847 = _0x1cd9c1["audioControlBG"];
            if (_0x54dab0) {
                _0x1648d8["style"].background = "linear-gradient(" + _0x54dab0 + ")";
                _0x53b847.style.background = "linear-gradient(" + _0x54dab0 + ")";
            } else {
                _0x1648d8["style"]["background"] = "";
                _0x53b847.style["background"] = "";
            }
        },
        setCardBorderRadius: function (_0x2374ee, _0x41b9a0) {
            _0x2374ee.card["style"]["borderRadius"] = _0x41b9a0["cardBorderRadius"] + "px";
            _0x2374ee["inputbox"]["style"]["borderTopLeftRadius"] = _0x41b9a0["cardBorderRadius"] + "px";
            _0x2374ee["inputbox"]["style"].borderBottomLeftRadius = _0x41b9a0.cardBorderRadius + "px";
            _0x2374ee["stsBox"]["style"]["borderTopRightRadius"] = _0x41b9a0["cardBorderRadius"] + "px";
            _0x2374ee["stsBox"]["style"]["borderBottomRightRadius"] = _0x41b9a0["cardBorderRadius"] + "px";
        }
    };
    constants["lang"] = {
        defaults: constants["messages"]["lang"],
        miniDefaults: constants.messages.miniLang,
        aria: constants.messages["aria"],
        validateCustomLangConf: function (_0x1263e2) {
            if (_0x1263e2["customLangText"]) {
                if (constants["util"]["isObject"](_0x1263e2.customLangText)) {
                    var _0x8c62e1 = false;
                    for (var _0x412011 = 0; _0x412011 < Object["keys"](_0x1263e2["customLangText"])["length"]; _0x412011++) {
                        var _0x396005 = _0x1263e2["customLangText"][Object["keys"](_0x1263e2["customLangText"])[_0x412011]];
                        if (constants["util"].isObject(_0x396005)) {
                            var _0x49a04f = Object.keys(_0x396005);
                            for (var _0x29f036 = 0; _0x29f036 < _0x49a04f["length"]; _0x29f036++) {
                                var _0x74cb70 = _0x396005[_0x49a04f[_0x29f036]];
                                if (constants.util["isString"](_0x74cb70)) {
                                    if (_0x74cb70.length > 90) {
                                        constants["log"]["warn"](_0x1263e2, "Maximum allowed customLangText value is 90 characters");
                                        _0x396005[_0x49a04f[_0x29f036]] = _0x74cb70["replace"](/</g, "")["replace"](/>/g, "").replace(/\//g, "")["substring"](0, 90);
                                    } else {
                                        _0x396005[_0x49a04f[_0x29f036]] = _0x74cb70.replace(/</g, "")["replace"](/>/g, "")["replace"](/\//g, "");
                                    }
                                } else {
                                    _0x8c62e1 = true;
                                }
                            }
                        } else {
                            _0x8c62e1 = true;
                        }
                    }
                    if (_0x8c62e1) {
                        _0x1263e2["customLangText"] = constants.config["defaults"]["customLangText"];
                        constants["log"]["warn"](_0x1263e2, "Entered invalid characters in customLangText");
                    }
                } else {
                    _0x1263e2["customLangText"] = constants["config"]["defaults"].customLangText;
                    constants.log["warn"](_0x1263e2, "Entered invalid characters in customLangText");
                }
            }
            if (Object["keys"](_0x1263e2["customLangText"])["length"] != 0) {
                for (var _0x3443a2 in _0x1263e2["customLangText"]) {
                    if (_0x1263e2["customLangText"][_0x3443a2].privacy) {
                        delete _0x1263e2.customLangText[_0x3443a2]["privacy"];
                    }
                    if (_0x1263e2["customLangText"][_0x3443a2]["terms"]) {
                        delete _0x1263e2["customLangText"][_0x3443a2]["terms"];
                    }
                    if (_0x1263e2["widgetSize"] === constants.constant.mini) {
                        _0x1263e2["customLangText"][_0x3443a2] = constants["util"]["overlayConf"](constants["lang"]["miniDefaults"][_0x3443a2], _0x1263e2["customLangText"][_0x3443a2]);
                    } else {
                        _0x1263e2["customLangText"][_0x3443a2] = constants["util"]["overlayConf"](constants["lang"].defaults[_0x3443a2], _0x1263e2["customLangText"][_0x3443a2]);
                    }
                }
            }
        }
    };
    constants["config"] = {
        defaults: {
            sitekey: "",
            widgetSize: "standard",
            theme: "basic",
            lang: "en",
            challengeType: "standard",
            widgetInstance: "",
            iframeId: "",
            enableTestMode: "",
            action: "",
            autoFormValidate: false,
            autoFadeOuterText: false,
            custom: false,
            textLength: 0,
            sCode: 0,
            host: "",
            hostname: "",
            v: 0,
            customStyle: {},
            customLangText: {},
            testmode_lowFrictionInvisible: "",
            lowFrictionInvisible: "",
            enableMouseFlow: false,
            isMTCLinksDisabled: false,
            isMTCPowByDisabled: false
        },
        miniDefaults: {
            sitekey: "",
            widgetSize: "mini",
            theme: "basic",
            lang: "en",
            challengeType: "standard",
            widgetInstance: "",
            iframeId: "",
            enableTestMode: "",
            action: "",
            autoFormValidate: false,
            autoFadeOuterText: true,
            custom: false,
            textLength: 0,
            sCode: 0,
            host: "",
            hostname: "",
            v: 0,
            customStyle: {},
            customLangText: {},
            testmode_lowFrictionInvisible: "",
            lowFrictionInvisible: "",
            enableMouseFlow: false,
            isMTCLinksDisabled: false,
            isMTCPowByDisabled: false,
            miniFormWidth: 0,
            miniFormHeight: 45,
            minCaptchaWidth: 140,
            maxCaptchaWidth: 250,
            minCpatchaHeight: 42,
            maxCaptchaHeight: 55,
            audioWidth: 20,
            audioHeight: 20
        },
        validateConf: function (_0x36a513, _0x17341c, _0x239a29) {
            var _0x4b371a = constants["util"]["assign"](_0x36a513);
            _0x239a29 = _0x239a29 || _0x17341c;
            for (var _0x4d0887 in _0x4b371a) {
                if (_0x4b371a["hasOwnProperty"](_0x4d0887)) {
                    var _0x5ed7bc = _0x17341c[_0x4d0887];
                    var _0x5bbdc1 = typeof _0x4b371a[_0x4d0887];
                    if (_0x5ed7bc === undefined || _0x5ed7bc === null || _0x5ed7bc === "" || _0x5ed7bc === "undefined" || _0x5ed7bc === "null") {
                        delete _0x4b371a[_0x4d0887];
                    } else if (_0x5bbdc1 === "string") {
                        if (typeof _0x5ed7bc == "string") {
                            if (_0x4d0887 !== "host" && _0x4d0887 !== "hostname") {
                                _0x5ed7bc = _0x5ed7bc["replace"](/</g, "&lt;")["replace"](/>/g, "&gt;")["replace"](/\//g, "");
                                _0x5ed7bc = _0x5ed7bc["replace"](/"/g, " ")["replace"](/'/g, " ")["replace"](/{/g, "")["replace"](/}/g, "");
                            }
                            _0x4b371a[_0x4d0887] = _0x5ed7bc;
                        } else {
                            constants["log"]["warn"](_0x239a29, "Entered the invalid string for " + _0x4d0887);
                            delete _0x4b371a[_0x4d0887];
                        }
                    } else if (_0x5bbdc1 === "number") {
                        _0x5ed7bc = parseInt(_0x5ed7bc);
                        if (isNaN(_0x5ed7bc)) {
                            constants["log"]["warn"](_0x239a29, "Entered the invalid number for " + _0x4d0887);
                            delete _0x4b371a[_0x4d0887];
                        } else {
                            _0x4b371a[_0x4d0887] = _0x5ed7bc;
                        }
                    } else if (_0x5bbdc1 === "boolean") {
                        _0x5ed7bc = _0x5ed7bc["toString"]().toLowerCase();
                        if (_0x5ed7bc === "true" || _0x5ed7bc === "t" || _0x5ed7bc === "1") {
                            _0x4b371a[_0x4d0887] = true;
                        } else if (_0x5ed7bc === "false" || _0x5ed7bc === "f" || _0x5ed7bc === "0") {
                            _0x4b371a[_0x4d0887] = false;
                        } else {
                            delete _0x4b371a[_0x4d0887];
                            constants.log["warn"](_0x239a29, "Entered the invalid boolean value for " + _0x4d0887);
                        }
                    }
                }
            }
            _0x4b371a = this.confCheck(_0x4b371a);
            return _0x4b371a;
        },
        confCheck: function (_0x3a858d) {
            var _0x4d4c2b = _0x3a858d;
            var _0x52cff2 = "";
            if (_0x3a858d["sitekey"]) {
                _0x52cff2 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
                _0x3a858d["sitekey"] = _0x3a858d["sitekey"].trim();
                if (!_0x52cff2["test"](_0x3a858d.sitekey)) {
                    _0x3a858d.sitekey = this["defaults"]["sitekey"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in sitekey");
                } else if (_0x3a858d["sitekey"].length > 120) {
                    _0x3a858d["sitekey"] = this["defaults"]["sitekey"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered characters in sitekey exceeds maximum allowed characters limit of 120");
                }
            }
            if (_0x3a858d["enableTestMode"]) {
                _0x52cff2 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["enableTestMode"])) {
                    _0x3a858d["enableTestMode"] = this["defaults"]["enableTestMode"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in enableTestMode");
                } else if (_0x3a858d["enableTestMode"]["length"] > 120) {
                    _0x3a858d["enableTestMode"] = this["defaults"]["enableTestMode"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered characters in enableTestMode exceeds maximum allowed characters limit of 120");
                }
            }
            if (_0x3a858d["theme"]) {
                _0x52cff2 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
                if (!_0x52cff2["test"](_0x3a858d.theme)) {
                    _0x3a858d["theme"] = this["defaults"]["theme"];
                    constants["log"].warn(_0x4d4c2b, "Entered invalid characters in theme");
                } else if (_0x3a858d.theme.length > 30) {
                    _0x3a858d["theme"] = this["defaults"]["theme"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered characters in theme exceeds maximum allowed characters limit of 30");
                } else if (_0x3a858d.theme !== "basic" && constants["theme"][_0x3a858d.theme] === undefined) {
                    _0x3a858d["theme"] = this.defaults["theme"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered theme is not a valid theme");
                }
            }
            if (_0x3a858d["challengeType"]) {
                _0x52cff2 = /^[A-Za-z]+[A-Za-z]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["challengeType"])) {
                    _0x3a858d["challengeType"] = this["defaults"]["challengeType"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in challengeType");
                } else if (_0x3a858d["challengeType"]["length"] > 120) {
                    _0x3a858d.challengeType = this["defaults"]["challengeType"];
                    constants.log.warn(_0x4d4c2b, "Entered characters in challengeType exceeds maximum allowed characters limit of 120");
                } else if (_0x3a858d.challengeType !== "imageonly" && _0x3a858d["challengeType"] !== "standard") {
                    _0x3a858d["challengeType"] = this.defaults["challengeType"];
                    constants["log"]["warn"](_0x4d4c2b, "Challenge type can only be `imageonly`");
                }
            }
            if (_0x3a858d["autoFadeOuterText"]) {
                _0x52cff2 = /^[A-Za-z]+[A-Za-z]*$/g;
                if (!_0x52cff2.test(_0x3a858d["autoFadeOuterText"])) {
                    _0x3a858d["autoFadeOuterText"] = this["defaults"]["autoFadeOuterText"];
                    constants.log["warn"](_0x4d4c2b, "Entered invalid characters in autoFadeOuterText");
                } else if (_0x3a858d.autoFadeOuterText["length"] > 5) {
                    _0x3a858d["autoFadeOuterText"] = this["defaults"]["autoFadeOuterText"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered characters in autoFadeOuterText exceeds maximum allowed characters limit of 5");
                } else if (_0x3a858d["autoFadeOuterText"] === "true") {
                    _0x3a858d["autoFadeOuterText"] = true;
                } else if (_0x3a858d["autoFadeOuterText"] === "false") {
                    _0x3a858d["autoFadeOuterText"] = false;
                } else if (typeof _0x3a858d["autoFadeOuterText"] !== "boolean") {
                    _0x3a858d.autoFadeOuterText = this.defaults.autoFadeOuterText;
                    constants["log"]["warn"](_0x4d4c2b, "autoFadeOuterText can either only be true or false");
                }
            }
            if (_0x3a858d.action) {
                _0x52cff2 = /^[a-zA-Z0-9\-\_\.\,]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["action"])) {
                    _0x3a858d.action = _0x3a858d.action["replace"](/[^a-zA-Z0-9\-\_\.\,]/g, "");
                    constants["log"]["warn"]("Entered invalid characters in action");
                }
                if (_0x3a858d.action["length"] > 30) {
                    _0x3a858d["action"] = _0x3a858d.action["substring"](0, 30);
                    constants["log"]["warn"]("Entered characters in action exceeds maximum allowed characters limit of 30");
                }
            }
            if (_0x3a858d["lang"]) {
                _0x52cff2 = /^[0-9A-Za-z-\_]+[0-9A-Za-z-\_]*$/g;
                if (!_0x52cff2["test"](_0x3a858d.lang)) {
                    _0x3a858d["lang"] = this["defaults"]["lang"];
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in lang");
                } else if (constants["messages"]["lang"][_0x3a858d["lang"]] === undefined) {
                    _0x3a858d["lang"] = this["defaults"]["lang"];
                    constants["log"].warn(_0x4d4c2b, "Entered lang is not valid");
                }
            }
            if (_0x3a858d["textLength"]) {
                _0x52cff2 = /^[0-9]+[0-9]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["textLength"])) {
                    _0x3a858d["textLength"] = this["defaults"].textLength;
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in textLength");
                } else if (_0x3a858d.textLength < 1 || _0x3a858d["textLength"] > 20) {
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid values in textLength");
                    _0x3a858d["textLength"] = this.defaults.textLength;
                }
            }
            if (_0x3a858d["lowFrictionInvisible"]) {
                var _0x1d3df5 = true;
                _0x3a858d.lowFrictionInvisible = _0x3a858d["lowFrictionInvisible"]["toLowerCase"]();
                _0x52cff2 = /^[A-Za-z-]+[A-Za-z-]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["lowFrictionInvisible"])) {
                    _0x1d3df5 = false;
                    constants["log"].warn(_0x4d4c2b, "Entered invalid characters in lowFrictionInvisible");
                } else if (_0x3a858d["lowFrictionInvisible"] !== "force-visible") {
                    _0x1d3df5 = false;
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid value in lowFrictionInvisible");
                }
                if (!_0x1d3df5) {
                    _0x3a858d["lowFrictionInvisible"] = this["defaults"]["lowFrictionInvisible"];
                }
            }
            if (_0x3a858d.testmode_lowFrictionInvisible) {
                var _0x1d3df5 = true;
                _0x3a858d["testmode_lowFrictionInvisible"] = _0x3a858d.testmode_lowFrictionInvisible.toLowerCase();
                _0x52cff2 = /^[A-Za-z-]+[A-Za-z-]*$/g;
                if (!_0x52cff2["test"](_0x3a858d["testmode_lowFrictionInvisible"])) {
                    _0x1d3df5 = false;
                    constants["log"]["warn"](_0x4d4c2b, "Entered invalid characters in testmode_lowFrictionInvisible");
                } else if (_0x3a858d.testmode_lowFrictionInvisible !== "force-visible" && _0x3a858d["testmode_lowFrictionInvisible"] !== "force-invisible") {
                    _0x1d3df5 = false;
                    constants["log"]["warn"](_0x4d4c2b, "testmode_lowFrictionInvisible can only be either 'force-visible' or 'force-invisible'");
                } else if (_0x3a858d["enableTestMode"] === "") {
                    _0x1d3df5 = false;
                    constants["log"].error(_0x4d4c2b, "No test key is set via enableTestMode parameter which is required to use testmode_lowFrictionInvisible feature");
                }
                if (!_0x1d3df5) {
                    _0x3a858d["testmode_lowFrictionInvisible"] = this["defaults"]["testmode_lowFrictionInvisible"];
                }
            }
            if (_0x3a858d.miniFormWidth) {
                _0x3a858d["miniFormWidth"] = parseInt(_0x3a858d["miniFormWidth"]);
                if (isNaN(_0x3a858d["miniFormWidth"])) {
                    constants["log"]["warn"]("Entered characters for miniFormWidth should only be of numbers, within a range of 265 - 600");
                    _0x3a858d["miniFormWidth"] = this.defaultMiniConfig["miniFormWidth"];
                } else if (_0x3a858d.miniFormWidth < constants.constant["minMiniWidth"] || _0x3a858d["miniFormWidth"] > constants["constant"]["maxMiniWidth"]) {
                    constants["log"]["warn"]("Entered Width Value should be in range of 265 - 600");
                    _0x3a858d.miniFormWidth = this["defaultMiniConfig"]["miniFormWidth"];
                }
            }
            if (_0x3a858d["miniFormHeight"]) {
                _0x3a858d["miniFormHeight"] = parseInt(_0x3a858d["miniFormHeight"]);
                if (isNaN(_0x3a858d["miniFormHeight"])) {
                    constants["log"]["warn"]("Entered characters for miniFormHeight should only be of numbers, within a range of 42 - 55");
                    _0x3a858d["miniFormHeight"] = this["defaultMiniConfig"].miniFormHeight;
                } else if (_0x3a858d["miniFormHeight"] < constants["constant"]["minMiniHeight"] || _0x3a858d.miniFormHeight > constants["constant"].maxMiniHeight) {
                    constants.log["warn"]("Entered Height Value should be in range of 42 - 55");
                    _0x3a858d["miniFormHeight"] = this.defaultMiniConfig.miniFormHeight;
                }
            }
            return _0x3a858d;
        },
        isValidSitekey: function (_0x44027f) {
            var _0x322e6b = _0x44027f.sitekey;
            if (_0x322e6b === "" || _0x322e6b === null || _0x322e6b == undefined) {
                constants.log["error"](_0x44027f, "Missing Required Parameter: sitekey", 2410);
                return false;
            } else if (_0x322e6b["length"] > 200) {
                constants["log"]["error"](_0x44027f, "Sitekey Provided is Invalid", 2410);
                return false;
            }
            return true;
        },
        validateAndSetAction: function (_0xa7bbff) {
            var _0x277e1f = _0xa7bbff["action"]["trim"]();
            if (_0x277e1f == "" || _0x277e1f == null || _0x277e1f == undefined) {
                _0x277e1f = "";
            } else {
                _0x277e1f = _0x277e1f["replace"](/[^a-zA-Z0-9-_,.$]/gi, "")["slice"](0, 30);
            }
            return _0x277e1f;
        },
        validateCustomConf: function (_0x43d909) {
            var _0x335817 = constants["util"]["getObject"](_0x43d909["widgetInstance"]);
            _0x335817.customLangText = _0x43d909["eventinfo"]["customLangText"];
            _0x335817["customStyle"] = _0x43d909["eventinfo"]["customStyle"];
            if (_0x335817["customLangText"] !== undefined) {
                constants["lang"]["validateCustomLangConf"](_0x335817);
            }
            if (_0x335817["customStyle"] !== undefined) {
                constants["style"]["validateCustomCSSConf"](_0x335817);
            }
        },
        confSumm: "",
        setConfigForSummary: function (_0x5b5487) {
            this.confSumm = this["getConfigSummaryString"](_0x5b5487);
            document.cookie = "mtv1ConfSum=" + this.confSumm + "; path=/;secure;SameSite=None;Partitioned;";
        },
        getConfigSummaryString: function (_0x43e5e7) {
            if (!_0x43e5e7) {
                return "(noconf)";
            }
            var _0x2e5d35 = "{";
            _0x2e5d35 += "v:01" + "|";
            if (_0x43e5e7["widgetSize"]) {
                if (_0x43e5e7["widgetSize"] === constants["constant"].standard) {
                    _0x2e5d35 += "wdsz:std";
                } else if (_0x43e5e7.widgetSize === constants["constant"]["mini"]) {
                    _0x2e5d35 += "wdsz:min";
                } else {
                    _0x2e5d35 += "wdsz:OTH";
                }
                _0x2e5d35 += "|";
            }
            if (_0x43e5e7["theme"]) {
                _0x2e5d35 += "thm:" + _0x43e5e7.theme + "|";
            }
            if (_0x43e5e7["lang"]) {
                _0x2e5d35 += "lan:" + _0x43e5e7["lang"] + "|";
            }
            if (_0x43e5e7["challengeType"]) {
                if (_0x43e5e7.challengeType === "standard") {
                    _0x2e5d35 += "chlg:std";
                } else if (_0x43e5e7.challengeType === "imageonly") {
                    _0x2e5d35 += "chlg:img";
                } else {
                    _0x2e5d35 += "chlg:OTH";
                }
                _0x2e5d35 += "|";
            }
            if (_0x43e5e7["customLangText"]) {
                _0x2e5d35 += "clan:1" + "|";
            }
            if (_0x43e5e7["customStyle"]) {
                _0x2e5d35 += "cstyl:1" + "|";
            }
            if (typeof _0x43e5e7["autoFormValidate"] == "boolean") {
                _0x2e5d35 += "afv:" + (_0x43e5e7["autoFormValidate"] ? "1" : "0") + "|";
            }
            if (typeof _0x43e5e7["autoFadeOuterText"] == "boolean") {
                _0x2e5d35 += "afot:" + (_0x43e5e7["autoFadeOuterText"] ? "1" : "0") + "|";
            }
            if (_0x43e5e7["render"]) {
                if (_0x43e5e7["render"] === "auto") {
                    _0x2e5d35 += "rnd:aut";
                } else if (_0x43e5e7.render === "explicit") {
                    _0x2e5d35 += "rnd:exp";
                } else {
                    _0x2e5d35 += "rnd:OTH";
                }
                _0x2e5d35 += "|";
            }
            if (typeof _0x43e5e7["waitForDom"] == "number") {
                _0x2e5d35 += "wfd:" + _0x43e5e7["waitForDom"] + "|";
            }
            if (_0x2e5d35["length"] > 150) {
                _0x2e5d35 = _0x2e5d35["substring"](0, 150) + "...";
            }
            _0x2e5d35 += "}";
            return _0x2e5d35;
        }
    };
    constants["jsBuildVersion"] = {
        num: "2024-11-14.21.50.58",
        setInCookie: function (_0xf4f561) {
            if (!_0xf4f561) {
                return;
            }
            _0xf4f561 = _0xf4f561.replace(",", "_");
            _0xf4f561 = _0xf4f561.replace(";", "-");
            _0xf4f561 = _0xf4f561["replace"](" ", "");
            document["cookie"] = "jsV=" + _0xf4f561 + "; path=/;secure;SameSite=None;Partitioned;";
        }
    };
    constants["status"] = {
        code: {
            api: {
                OK: 1200,
                RESTART_CAPTCHA_TRANSACTION: 1310,
                RESTART_CAPTCHA_CHALLENGE_EXPIRED: 1315,
                REQ_ERR: 1400,
                BAD_SITEKEY: 1410,
                SITEKEY_EXPIRED: 1411,
                DOMAIN_NOTMATCH: 1415,
                BAD_TESTKEY: 1416,
                VOID_TESTKEY: 1417,
                BAD_CHALLENGETOKEN: 1431,
                BAD_CPUFOLD_ANSWER: 1432,
                MISMATCH_CHALLENGETOKEN_DATA: 1451
            },
            http: {
                HTTP_ERROR: 400,
                HTTP_ERROR404: 404,
                TOO_MANY_REQUEST: 429,
                INTERNAL_SERVER_ERROR: 500,
                CONNECTION_TIMEOUT: 503
            },
            general: {
                CAP_LOADING: 0,
                CAP_VERIFYING: 2205,
                CAP_VERIFIED: 2100,
                CAP_NOT_VERIFIED: 2200,
                CAP_EXPIRED: 2211,
                CAP_VERIFIED_TOKEN_EXPIRED: 2210,
                CONNECTION_ERR: 2301
            },
            internal: {
                CAPTCHA_LOADED: "CAPTCHA_LOADED",
                AUDIO_DOWNLOADING: "AUDIO_DOWNLOADING",
                AUDIO_PLAYING: "AUDIO_PLAYING",
                LOADING_NEW: "LOADING_NEW",
                RELOADING_NEW: "RELOADING_NEW",
                CAPTCHA_NEWLY_LOADED: "CAPTCHA_NEWLY_LOADED",
                CAPTCHA_SOLUTION_INCOMPLETE: "CAPTCHA_SOLUTION_INCOMPLETE",
                VERIFIYING_INPUT: "VERIFIYING_INPUT",
                VALIDATION_FAILED: "VALIDATION_FAILED",
                VALIDATION_SUCCESS: "VALIDATION_SUCCESS",
                TOKEN_TIMEOUT: "TOKEN_TIMEOUT",
                ERROR: "ERROR"
            }
        },
        internalStatus: "",
        messages: {
            0: "Loading",
            2100: "Verified",
            2200: "Not Verified",
            2205: "Verifying",
            2210: "Verified Token Expired",
            2301: "Network/Connection Error",
            1400: "Malformed Request",
            1410: `ERROR for site owner: 
 Invalid Sitekey 
 (1410)`,
            1411: "ERROR for site owner: Sitekey Expired (1411)",
            1415: "This website is not within the supported domains for this Sitekey",
            1416: "ERROR for site owner: Invalid Testkey (1416)",
            400: "Error Occurred, Please try again.. (400)",
            404: "Error Occurred, Please try again.. (404)",
            429: "The IP or network you are on is temporarily blocked due to misuse, please try again later.  (429)",
            500: "Internal server error occurred, Please try again..  (500)",
            503: "Service unavailable, Please try again later... (503)"
        },
        httpErrorMessages: {
            429: "Too Many Requests (429)",
            500: "Internal Server Error (500)",
            400: "Bad Request (400)",
            404: "Page Not Found (404)",
            503: "Service Unavailable (503)"
        },
        getStatus: function (_0x506212, _0x21845c) {
            var _0x16dd17 = {
                element: _0x506212["widgetInstance"],
                domID: _0x506212.widgetInstance,
                lf: _0x506212.lf
            };
            if (typeof _0x506212 !== "undefined") {
                _0x16dd17["statusCode"] = _0x506212.sCode || 0;
                _0x16dd17["verifiedToken"] = _0x506212["sCode"] == constants.status["code"]["general"]["CAP_VERIFIED"] ? _0x506212["verifiedToken"] : "";
                _0x16dd17["isVerified"] = _0x506212["sCode"] == constants["status"].code.general["CAP_VERIFIED"] ? true : false;
                _0x16dd17["statusDesc"] = this["code"][_0x506212["sCode"]] || _0x21845c || "";
                _0x16dd17["isLowFriction"] = _0x506212.isLowFriction;
                _0x16dd17["isVisible"] = _0x506212["isVisible"];
            }
            return _0x16dd17;
        },
        getInternalStatus: function () {
            return this["internalStatus"];
        },
        getIsError: function () {
            var _0x3254c0 = constants["status"]["code"];
            return this["internalStatus"] === _0x3254c0["internal"].CAPTCHA_SOLUTION_INCOMPLETE || this.internalStatus === _0x3254c0.internal["VALIDATION_FAILED"] || this.internalStatus === _0x3254c0["internal"].TOKEN_TIMEOUT || this["internalStatus"] === _0x3254c0["internal"].ERROR;
        },
        setStatus: function (_0x3b7eb0) {
            var _0x1ab229 = constants["status"].code;
            this["internalStatus"] = _0x3b7eb0;
            switch (_0x3b7eb0) {
                case _0x1ab229.internal["CAPTCHA_LOADED"]:
                    constants["util"]["updateAriaMessageState"](_0x1ab229["internal"]["CAPTCHA_LOADED"]);
                    break;
                case _0x1ab229.internal["AUDIO_DOWNLOADING"]:
                    constants["util"]["updateAriaMessageState"](_0x1ab229["internal"]["AUDIO_DOWNLOADING"]);
                    constants["util"]["updateUI"](_0x1ab229.internal["AUDIO_DOWNLOADING"]);
                    break;
                case _0x1ab229.internal["AUDIO_PLAYING"]:
                    constants.util["updateAriaMessageState"](_0x1ab229["internal"].AUDIO_PLAYING);
                    constants.util.updateUI(_0x1ab229.internal.AUDIO_PLAYING);
                    break;
                case _0x1ab229["internal"].LOADING_NEW:
                    _0x33a29e.sCode = constants["status"].code["general"]["CAP_LOADING"];
                    constants.util["updateAriaMessageState"](_0x1ab229["internal"]["LOADING_NEW"]);
                    constants["util"]["updateUI"](_0x1ab229.internal["LOADING_NEW"]);
                    break;
                case _0x1ab229["internal"].RELOADING_NEW:
                    _0x33a29e["sCode"] = constants["status"]["code"]["general"]["CAP_LOADING"];
                    constants["util"]["updateAriaMessageState"](_0x1ab229["internal"]["RELOADING_NEW"]);
                    constants["util"]["updateUI"](_0x1ab229["internal"]["RELOADING_NEW"]);
                    break;
                case _0x1ab229["internal"]["CAPTCHA_NEWLY_LOADED"]:
                    constants["util"].updateAriaMessageState(_0x1ab229.internal["CAPTCHA_NEWLY_LOADED"]);
                    break;
                case _0x1ab229["internal"].CAPTCHA_SOLUTION_INCOMPLETE:
                    constants["util"].updateUI(_0x1ab229["internal"]["CAPTCHA_SOLUTION_INCOMPLETE"]);
                    constants["util"].updateAriaMessageState(_0x1ab229["internal"]["CAPTCHA_SOLUTION_INCOMPLETE"]);
                    constants["widget"]["showOrHideOuterText"]();
                    break;
                case _0x1ab229["internal"]["VERIFIYING_INPUT"]:
                    _0x33a29e["sCode"] = constants["status"]["code"]["general"]["CAP_VERIFYING"];
                    if (!_0x33a29e["isLowFriction"]) {
                        constants.util["updateAriaMessageState"](_0x1ab229["internal"].VERIFIYING_INPUT);
                        constants["util"]["updateUI"](_0x1ab229["internal"]["VERIFIYING_INPUT"]);
                    }
                    constants["postMessage"](_0x33a29e, "verifystatuschange", {
                        msg: constants.status["messages"][constants["status"]["code"]["general"]["CAP_VERIFYING"]]
                    });
                    break;
                case _0x1ab229["internal"]["VALIDATION_FAILED"]:
                    _0x33a29e["sCode"] = constants["status"]["code"]["general"]["CAP_NOT_VERIFIED"];
                    _0x33a29e["verifiedToken"] = "";
                    _0x33a29e.verifyFail = true;
                    _0x33a29e.isVerifying = false;
                    if (!_0x33a29e["isLowFriction"]) {
                        _0x3d0c7c = true;
                        constants["util"].updateAriaMessageState(_0x1ab229.internal["VALIDATION_FAILED"]);
                        constants.util.updateUI(_0x1ab229["internal"]["VALIDATION_FAILED"]);
                        constants["widget"].showOrHideOuterText();
                    }
                    _0x33a29e["resetTimer"] = setTimeout(function () {
                        constants["render"]["reset"](_0x33a29e["widgetInstance"]);
                    }, 1000);
                    break;
                case _0x1ab229.internal["VALIDATION_SUCCESS"]:
                    _0x33a29e["sCode"] = constants["status"]["code"]["general"]["CAP_VERIFIED"];
                    _0x33a29e.isVerifying = false;
                    if (!_0x33a29e["isLowFriction"]) {
                        constants.util.updateAriaMessageState(_0x1ab229["internal"]["VALIDATION_SUCCESS"]);
                        constants["util"]["updateUI"](_0x1ab229["internal"]["VALIDATION_SUCCESS"]);
                    }
                    constants["postMessage"](_0x33a29e, "verifystatuschange", {
                        msg: constants.status["messages"][constants.status["code"]["general"]["CAP_VERIFIED"]]
                    });
                    break;
                case _0x1ab229["internal"].TOKEN_TIMEOUT:
                    _0x33a29e.sCode = constants["status"]["code"]["general"]["CAP_VERIFIED_TOKEN_EXPIRED"];
                    if (!_0x33a29e.isLowFriction) {
                        constants["util"].updateAriaMessageState(_0x1ab229["internal"]["TOKEN_TIMEOUT"]);
                        constants.util.updateUI(constants["status"].code["internal"]["TOKEN_TIMEOUT"]);
                        constants["widget"].showOrHideOuterText();
                    }
                    break;
                case _0x1ab229.internal["ERROR"]:
                    constants["util"]["updateUI"](constants["status"]["code"]["internal"].ERROR);
                    constants["util"]["updateAriaMessageState"](constants.status["code"]["internal"].ERROR);
                    constants["widget"]["showOrHideOuterText"]();
                    break;
                default:
                    break;
            }
        }
    };
    constants["eventEmitter"] = {
        events: {
            setConfigCustom: function () {
                var _0x1d8d39 = constants["util"]["getObject"](this["widgetInstance"]);
                if (_0x1d8d39["renderDelayTimer"] == null) {
                    constants.postMessage(_0x1d8d39, "warning", {
                        msg: "Custom Config Received late."
                    });
                } else {
                    clearTimeout(_0x1d8d39.renderDelayTimer);
                    constants["config"]["validateCustomConf"](this);
                    constants["render"]["doRender"](_0x1d8d39);
                }
            },
            showRequired: function () {
                constants["status"]["setStatus"](constants["status"]["code"]["internal"]["CAPTCHA_SOLUTION_INCOMPLETE"]);
                constants.UI["events"].status.showRequired(_0x33a29e, true);
            },
            enableTestMode: function () {
                var _0x136a18 = constants["util"]["getObject"](this["widgetInstance"]);
                _0x136a18["enableTestMode"] = this.eventinfo["enableTestMode"];
            },
            autoFadeOuterText: function () {
                var _0x292df0 = constants["util"]["getObject"](this["widgetInstance"]);
                _0x292df0["autoFadeOuterText"] = this.eventinfo["autoFadeOuterText"];
            },
            getStatus: function () {
                var _0x2f5a8b = constants.util["getObject"](this["widgetInstance"]);
                constants["postMessage"](_0x2f5a8b, "status", {
                    msg: this["eventinfo"].msg
                });
            },
            focus: function () {
                var _0x1d2d8b = constants["util"]["getObject"](this["widgetInstance"]);
                constants.UI.e[_0x1d2d8b.widgetInstance]["inputText"]["focus"]();
            },
            errorCardHeightChange: function () {
                var _0x237eb3 = constants.UI.e[_0x33a29e.widgetInstance];
                constants["util"]["updateErrorCardHeight"](_0x237eb3);
            },
            errorCardClicked: function () {
                var _0x16cf60 = constants.UI.e[this["widgetInstance"]];
                constants["render"]["reset"](this["widgetInstance"]);
                _0x16cf60["stsBtn"].style["position"] = "absolute";
            }
        },
        trigger: function (_0x38aaeb, _0x5b649c) {
            if (this["events"][_0x38aaeb]) {
                this["events"][_0x38aaeb]["apply"](_0x5b649c);
            }
        }
    };
    _0x2048b2("message", function (_0x27a12e) {
        try {
            var _0x401e31 = constants["util"]["IsJsonString"](_0x27a12e["data"]);
            if (!_0x401e31) {
                return;
            }
            var _0x8b871a = JSON.parse(_0x27a12e["data"]);
            if (_0x8b871a.mtcap != 2) {
                return;
            }
            constants["eventEmitter"]["trigger"](_0x8b871a["event"], _0x8b871a);
        } catch (_0x2714ea) {
            constants["log"]["warn"](_0x33a29e, "Error occurred - " + _0x2714ea);
        }
    }, false);
    constants["browser"] = {
        win: window,
        cd: new Date(),
        calcW1nfo: function (_0x3fd34a) {
            var _0x26b868 = constants.hash["reverseStr"];
            var _0x26542a = this[_0x26b868("niw")];
            var _0xa214d5 = _0x26542a[_0x26b868("rot" + "agi" + "van")];
            var _0x368719 = _0x26542a[_0x26b868("tne" + "mucod")];
            var _0x369b72 = _0x26542a.Math["rand" + "om"];
            var _0x10e2df = _0x26542a.Math["abs"];
            var _0x9c890e = _0x26542a["M" + "ath"]["fl" + "oor"];
            var _0x12e953 = {
                v: [0, 1]
            };
            _0x12e953.r = [_0x9c890e(_0x369b72() * 4095.99), _0x9c890e(_0x369b72() * 4095.99)];
            _0x12e953.n = Math.floor(window["Date"]["now"]() / 1000);
            _0x12e953.z = _0x9c890e(new Date()["getTimezoneOffset"]() / 10);
            _0x12e953.a = _0xa214d5["use" + _0x26b868("gAr") + "ent"];
            _0x12e953.c = _0x368719[_0x26b868("ooc") + "kie"];
            _0x12e953.d = _0x368719[_0x26b868("rerr" + "efer")] + "";
            _0x12e953.l = _0xa214d5["la" + _0x26b868("augn") + "ge"];
            _0x12e953.h = _0xa214d5["hardwareConcurrency"];
            var _0x57e368 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            _0x12e953.res = _0x57e368;
            _0x57e368[0] = _0x12e953.v[0];
            _0x57e368[1] = _0x12e953.v[1];
            _0x57e368[2] = _0x12e953.r[0];
            _0x57e368[3] = _0x12e953.r[1];
            _0xc964a1: {
                var _0x266ad6 = Math.floor(_0x12e953.n / 4194304) % 4096;
                var _0x483d9a = (_0x12e953.n % 4194304 >> 11) % 4096;
                var _0x5143f6 = _0x12e953.n % 4194304 % 2048;
                _0x57e368[4] = _0x266ad6;
                _0x57e368[5] = _0x483d9a;
                _0x57e368[6] = _0x5143f6;
            }
            _0x57e368[7] = _0x10e2df(Math["floor"](_0x12e953.z / 10) % 4096);
            _0x57e368[8] = _0x10e2df(constants.hash["hashStr"]((_0x12e953.a + "")["toLowerCase"]())) % 4096;
            var _0x73427b = (_0x12e953.d + "").toLowerCase()["match"](`^(?:https?://)?(?:[^@/
]+@)?(?:www.)?([^:/
]+)`);
            _0x73427b = _0x73427b == null ? "" : _0x73427b[1];
            _0x57e368[9] = _0x10e2df(constants.hash.hashStr(_0x73427b["toLowerCase"]())) % 4096;
            _0x57e368[10] = _0x10e2df(constants.hash["hashStr"]((_0x12e953.l + "").toLowerCase())) % 4096;
            _0x57e368[11] = _0x12e953.h % 4096;
            var _0x1325a7 = 0;
            for (var _0x4df887 = 0; _0x4df887 < 12; _0x4df887++) {
                _0x1325a7 = _0x1325a7 * 31 + _0x57e368[_0x4df887];
                _0x1325a7 = _0x1325a7 & _0x1325a7;
            }
            _0x1325a7 = Math["abs"](_0x1325a7);
            _0x57e368[12] = _0x1325a7 % 4096;
            for (var _0x4df887 = 4; _0x4df887 < _0x57e368["length"]; _0x4df887++) {
                _0x57e368[_0x4df887] = _0x57e368[_0x4df887] ^ _0x12e953.r[_0x4df887 % 2];
            }
            var _0x346dcb = [];
            for (var _0x4df887 = 0; _0x4df887 < _0x57e368["length"]; _0x4df887++) {
                _0x346dcb.push(constants["FoldChlg"]["URLSafeBase4096IntToChar"](_0x57e368[_0x4df887]));
            }
            _0x12e953["base4096"] = _0x346dcb["join"]("");
            if (!_0x26542a.TMs) {
                _0x26542a["TMs"] = {};
            }
            _0x26542a.TMs.hi = _0x12e953.base4096;
            _0x368719[_0x26b868("ooc") + _0x26b868("eik")] = "m" + _0x26b868("P1vt") + "ulse=" + _0x12e953.base4096 + ";path=/;secure;SameSite=None;Partitioned;";
            if (!_0x26542a["TMs"].ef) {
                _0x26542a["TMs"].ef = _0x26542a["se" + _0x26b868("etnIt") + "rval"](function () {
                    constants.browser["calcW1nfo"](true);
                }, 1350);
            }
        }
    };
    constants["FoldChlg"] = {
        URLSafeBase64CharCode2IntMap: [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, -1, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, -1, -1, -1, -1, 63, -1, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        URLSafeBase64Int2CharMap: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "_"],
        URLSafeBase64CharToInt: function (_0x5db43a) {
            if (typeof _0x5db43a === "string") {
                _0x5db43a = _0x5db43a["charCodeAt"](0);
            }
            var _0x2699c1 = this["URLSafeBase64CharCode2IntMap"][_0x5db43a % 256];
            if (_0x2699c1 < 0) {
                throw "arg charCode must be within chars [a-zA-Z0-9:;] '" + _0x5db43a + "'";
            }
            return _0x2699c1;
        },
        URLSafeBase64IntToChar: function (_0x26f8c7) {
            if (_0x26f8c7 < 0 || _0x26f8c7 > 63) {
                throw "arg i must be between 0 .. 63 inclusive";
            }
            return this["URLSafeBase64Int2CharMap"][_0x26f8c7 % 64];
        },
        URLSafeBase4096IntToChar: function (_0x101738) {
            if (_0x101738 > 4095 || _0x101738 < 0) {
                throw "arg i must be between 0 .. 4095 inclusive";
            }
            return "" + this["URLSafeBase64IntToChar"](_0x101738 >> 6) + this["URLSafeBase64IntToChar"](_0x101738 & 63);
        },
        URLSafeBase64Str2IntArray: function (_0x42402c) {
            var _0x379e1d = [];
            for (var _0x411f36 = 0; _0x411f36 < _0x42402c["length"]; _0x411f36++) {
                _0x379e1d.push(this["URLSafeBase64CharToInt"](_0x42402c["charAt"](_0x411f36)));
            }
            return _0x379e1d;
        },
        URLSafeBase64IntArray2String: function (_0x39aec0) {
            var _0x56170e = [];
            for (var _0x4f760a = 0; _0x4f760a < _0x39aec0["length"]; _0x4f760a++) {
                _0x56170e.push(this["URLSafeBase64IntToChar"](_0x39aec0[_0x4f760a]));
            }
            return _0x56170e["join"]("");
        },
        hashIntAry: function (_0x2c7601) {
            var _0x4bb62d = 0;
            var _0x504548;
            for (_0x504548 = 0; _0x504548 < _0x2c7601["length"]; _0x504548++) {
                _0x4bb62d = (_0x4bb62d << 5) - _0x4bb62d + _0x2c7601[_0x504548];
                _0x4bb62d = _0x4bb62d & _0x4bb62d;
            }
            if (_0x4bb62d < 0) {
                _0x4bb62d *= -1;
            }
            return _0x4bb62d;
        },
        solve: function (fseed, fslots, fdepth) {
            if (!fseed || fslots < 1) {
                return "0";
            }
            var _0x311562 = [];
            var _0x3d9dd9 = this.URLSafeBase64Str2IntArray(fseed);
            var _0x23dab8 = null;
            for (var _0x26938f = 0; _0x26938f < fslots; _0x26938f++) {
                _0x3d9dd9 = this["foldBase64IntArray"](_0x3d9dd9, 31);
                _0x23dab8 = this["hashIntAry"](this.foldBase64IntArray(_0x3d9dd9, fdepth));
                _0x311562["push"](this["URLSafeBase4096IntToChar"](_0x23dab8 % 4096));
            }
            return _0x311562["join"]("");
        },
        foldBase64IntArray: function (a1, foldCount) {
            var a2 = a1.slice().reverse();
            var a3 = a1.slice();
            var offset = 0;
            var x = 0;
            var y = 0;
            var z = 0;
            var i = 0;
            for (i = 0; i < foldCount; i++) {
                offset++;
                for (x = 0; x < a1.length; x++) {
                    a3[x] = (Math.floor((a3[x] + a2[(x + offset) % a2.length]) * 73 / 8) + y + z) % 64;
                    z = Math.floor(y / 2);
                    y = Math.floor(a3[x] / 2);
                }
            }
            return a3;
        }
    };
    var _0x1add24 = constants["util"]["confExtractorFrmURI"]();
    _0xfd277a = _0x1add24["serviceDomain"];
    window["MTerr"] = {};
    var _0x19cb02 = window.MTerr;
    _0x19cb02["errCount"] = 0;
    _0x19cb02["logCount"] = 0;
    _0x19cb02["lastErr"] = null;
    _0x19cb02["logErr"] = constants["api"]["request"].logUnexpectedJsError;
    _0x19cb02["onUnexpectedJSError"] = function (_0x18e407) {
        _0x19cb02["storeLastError"](_0x18e407["error"]);
        _0x19cb02["tryLogLastError"]();
    };
    _0x19cb02["storeLastError"] = function (_0x22fc27) {
        try {
            if (!_0x22fc27) {
                return;
            }
            _0x19cb02["errCount"]++;
            var _0x2c01dc = {
                ["info"]: _0x22fc27 + ""
            };
            _0x2c01dc["stack"] = _0x22fc27["stack"] ? _0x22fc27["stack"] + "" : "(nostack)";
            _0x2c01dc["timestamp"] = Date.now();
            _0x19cb02["lastErr"] = _0x2c01dc;
            if (_0x2c01dc["info"].length > 30) {
                _0x2c01dc.info = _0x2c01dc["info"].substring(0, 31) + "...";
            }
            if (_0x2c01dc["stack"]["length"] > 500) {
                _0x2c01dc["stack"]["substring"](0, 501) + "...";
            }
        } catch (_0x55f2a1) {
            constants["log"]["warn"](_0x33a29e, "Error occurred - " + _0x55f2a1);
        }
    };
    _0x19cb02["tryLogLastError"] = function () {
        try {
            if (!_0x19cb02["lastErr"]) {
                return;
            }
            if (_0x19cb02.logCount >= 2) {
                return;
            }
            _0x19cb02["logCount"]++;
            var _0x258b9f = _0x19cb02["lastErr"];
            _0x19cb02.logErr(_0x258b9f["info"], _0x258b9f.stack);
        } catch (_0x2423a4) {
            constants["log"]["warn"](_0x33a29e, "Error occurred - " + _0x2423a4);
        }
    };
    constants["expire"] = {
        setCTExpireTimer: function (_0xa8abc1, _0x1fcb5c) {
            var _0x2151e6 = (_0x1fcb5c - 5) * 1000;
            _0xa8abc1["challengeExpireTimer"] = setTimeout(function () {
                _0xa8abc1["sCode"] = constants["status"]["code"]["general"]["CAP_EXPIRED"];
                constants["log"]["warn"](_0xa8abc1, "Captcha has been expired - " + _0xa8abc1.widgetInstance, constants.status["code"]["general"]["CAP_EXPIRED"]);
                constants["widget"].expire(_0xa8abc1);
                if (_0xa8abc1["autoReloadCnt"] < 3) {
                    setTimeout(function () {
                        constants["render"]["reset"](_0xa8abc1.widgetInstance);
                        _0xa8abc1.autoReloadCnt++;
                    }, 1500);
                } else {
                    constants.UI.e[_0xa8abc1["widgetInstance"]].inputText["blur"]();
                    clearTimeout(_0xa8abc1["challengeExpireTimer"]);
                    _0xa8abc1["autoReloadCnt"] = 0;
                    constants["status"]["setStatus"](constants.status["code"]["internal"]["TOKEN_TIMEOUT"]);
                }
            }, _0x2151e6);
        },
        setSTExpireTimer: function (_0x1a05b6, _0x59c2ff) {
            var _0x495c61 = (_0x59c2ff - 5) * 1000;
            _0x1a05b6.successTokenExpireTimer = setTimeout(function () {
                _0x1a05b6["sCode"] = constants["status"]["code"]["general"].CAP_VERIFIED_TOKEN_EXPIRED;
                constants["postMessage"](_0x1a05b6, "verifystatuschange", {
                    msg: "verifyexpired"
                });
                if (!_0x1a05b6["isLowFriction"]) {
                    constants["widget"]["expire"](_0x1a05b6);
                }
                constants["status"]["setStatus"](constants["status"]["code"]["internal"]["TOKEN_TIMEOUT"]);
                setTimeout(function () {
                    constants.render.reset(_0x1a05b6["widgetInstance"]);
                }, 1500);
            }, _0x495c61);
        }
    };
    constants["widget"] = {
        enable: function (_0x43b042) {
            var _0x1d2ed8 = constants.UI.e[_0x43b042["widgetInstance"]];
            var _0x32ca36 = constants.UI["events"];
            if (_0x43b042.challengeType != "imageonly") {
                _0x32ca36["audio"]["toggleImg"](_0x43b042, false, 0);
            }
            if (!_0x43b042["isVerifying"]) {
                _0x32ca36.status.toggleImg(_0x43b042, 0);
                _0x32ca36["status"]["showStatusMsg"](_0x43b042, 0);
                _0x32ca36.status.rotateImg(false);
            }
            if (!_0x43b042["initialLoad"]) {
                _0x1d2ed8.inputText["value"] = "";
            }
            this["disable"](_0x43b042["widgetInstance"], false);
            if (_0x43b042["verifyFail"] && _0x43b042["widgetSize"] == constants["constant"]["mini"]) {
                _0x1d2ed8["inputText"]["focus"]();
                _0x32ca36["status"]["showStatusMsg"](_0x43b042, 1, _0x43b042["langTxt"]["enterTextMsg"]);
                _0x43b042["verifyFail"] = false;
            } else {
                _0x32ca36.status["showStatusMsg"](_0x43b042, 0);
                _0x43b042["verifyFail"] = false;
            }
        },
        expire: function (_0x35369f) {
            var _0x71787b = constants.UI.e[_0x35369f.widgetInstance];
            var _0x253d53 = constants.UI["events"];
            if (_0x35369f["challengeType"] != "imageonly") {
                _0x253d53.audio["toggleImg"](_0x35369f, false, 0);
            }
            _0x253d53.status.toggleImg(_0x35369f, 3);
            _0x253d53.status["showStatusMsg"](_0x35369f, 2, _0x35369f.langTxt.captchaExpired);
            _0x71787b["inputText"]["value"] = "";
            this["disable"](_0x35369f["widgetInstance"], true);
        },
        userReset: function (_0x2ddf21, _0xe9f275) {
            var _0x598ab1 = constants.UI["events"];
            _0x598ab1["status"]["toggleImg"](_0x2ddf21, 0);
            _0x598ab1["status"]["showStatusMsg"](_0x2ddf21, 2, _0xe9f275);
        },
        load: function (_0x9d5e30, _0x23335e) {
            if (_0x23335e) {
                constants.UI["events"]["status"].showStatusMsg(_0x9d5e30, 1, _0x9d5e30["langTxt"].reload);
                constants.status["setStatus"](constants["status"]["code"]["internal"]["RELOADING_NEW"]);
            } else {
                constants.UI["events"]["status"]["showStatusMsg"](_0x9d5e30, 1, _0x9d5e30["langTxt"]["loading"]);
                constants["status"].setStatus(constants["status"]["code"]["internal"]["LOADING_NEW"]);
            }
        },
        networkFailed: function (_0x32b16a, _0x240e3f) {
            constants["status"].setStatus(constants["status"]["code"].internal.ERROR);
            var _0x42e300 = constants.UI.e[_0x32b16a["widgetInstance"]];
            if (_0x32b16a["widgetSize"] == constants.constant.standard) {
                _0x42e300["alrtImg"].src = constants.asserts["alrtImg"];
                _0x42e300.alrtMsg["innerHTML"] = _0x32b16a["langTxt"]["connectionError"];
                _0x42e300["errorCode"]["innerHTML"] = "(Error " + _0x240e3f + ")";
                constants.util.updateErrorCardHeight(_0x42e300);
            } else {
                var _0x243e67 = constants.UI.e[_0x32b16a.widgetInstance].card;
                constants["postMessage"](_0x32b16a, "miniError", {
                    errorMsg: _0x32b16a.langTxt.connectionError,
                    errorcode: _0x240e3f,
                    showPlainCard: false,
                    width: _0x32b16a["widgetWidth"],
                    height: _0x32b16a.widgetHeight,
                    errorCardWidth: _0x243e67["clientWidth"],
                    errorType: 1
                });
            }
        },
        error: function (_0x297026, _0xc3d5e0, _0x4c358d, _0x10553e) {
            constants["status"]["setStatus"](constants["status"]["code"]["internal"]["ERROR"]);
            var _0x3b026c = constants.UI.e[_0x297026["widgetInstance"]];
            if (_0x297026["widgetSize"] == constants.constant["standard"]) {
                _0x3b026c["alrtImg"].src = constants["asserts"]["error"];
                _0x3b026c["alrtMsg"].innerHTML = _0xc3d5e0;
                _0x3b026c["errorCode"]["innerHTML"] = "(Error " + _0x4c358d + ")";
                if (_0x10553e) {
                    _0x3b026c["alrtbtn"].style["display"] = "none";
                    _0x3b026c["alert"].style["margin"] = "18px";
                    _0x3b026c.alrtImg.style["marginTop"] = "-4px";
                }
                constants["util"]["updateErrorCardHeight"](_0x3b026c);
            } else {
                var _0x8ca833 = constants.UI.e[_0x297026["widgetInstance"]]["card"];
                constants.postMessage(_0x297026, "miniError", {
                    errorMsg: _0xc3d5e0,
                    errorcode: _0x4c358d,
                    showPlainCard: _0x10553e,
                    width: _0x297026["widgetWidth"],
                    height: _0x297026["widgetHeight"],
                    errorCardWidth: _0x8ca833["clientWidth"],
                    errorType: 2
                });
            }
        },
        online: function (_0x4d7ff9) {
            var _0x13fe93 = constants.UI.e[_0x4d7ff9];
            _0x13fe93.errCard["style"]["display"] = "none";
            _0x13fe93.stsBtn["style"]["position"] = "absolute";
        },
        disable: function (_0x4f7bdb, _0x424525) {
            var _0x33f7f6 = constants["util"].getObject(_0x4f7bdb);
            if (_0x33f7f6["challengeType"] != "imageonly") {
                if (_0x424525) {
                    constants.UI.events.audio["hideAudioCtrl"](_0x33f7f6);
                } else {
                    constants.UI.events["audio"]["showAudioCtrl"](_0x33f7f6);
                }
            }
        },
        randomColor: function () {
            var _0x3ed1ef = "0123456789ABCDEF";
            var _0x3931d4 = "#";
            for (var _0x58316e = 0; _0x58316e < 6; _0x58316e++) {
                _0x3931d4 += _0x3ed1ef[Math["floor"](Math.random() * 16)];
            }
            return _0x3931d4;
        },
        showOrHideOuterText: function () {
            if (!_0x33a29e["autoFadeOuterText"]) {
                return;
            }
            var _0x1ca282 = constants.UI.e[_0x33a29e["widgetInstance"]];
            var _0x27c23c = false;
            if (constants.status.getIsError()) {
                _0x27c23c = true;
            }
            if (_0x1ca282 === undefined || _0x1ca282 === null) {
                return;
            }
            if (constants["util"]["canShowText"](_0x27c23c, _0x2722a3, _0x10a05d, _0x1feb4e)) {
                clearTimeout(_0xbda126);
                if (!_0x1feb4e) {
                    _0x1feb4e = true;
                    if (_0x33a29e.widgetSize != constants["constant"]["mini"]) {
                        constants["util"]["doAnimation"](_0x1ca282.privacyLink, "mtcap-fadein 300ms forwards linear");
                        constants["util"]["doAnimation"](_0x1ca282["termsLink"], "mtcap-fadein 300ms forwards linear");
                    }
                    constants["util"].doAnimation(_0x1ca282["msg"], "mtcap-fadein 300ms forwards linear");
                    if (_0x33a29e["challengeType"] != "imageonly") {
                        if (_0x33a29e["widgetSize"] != constants["constant"]["mini"]) {
                            constants["util"]["doAnimation"](_0x1ca282.ampersand, "mtcap-fadein 300ms forwards linear");
                        } else {
                            constants.util["doAnimation"](_0x1ca282["audioControl"], "mtcap-fadein 300ms forwards linear");
                        }
                    }
                    constants.util["doAnimation"](_0x1ca282["msgContainer"], "mtcap-fadein 300ms forwards linear");
                }
            } else if (constants.util["canHideText"](_0x2722a3, _0x10a05d, _0x1feb4e, _0x27c23c)) {
                _0xbda126 = setTimeout(function () {
                    _0x1feb4e = false;
                    if (_0x33a29e["widgetSize"] != constants["constant"].mini) {
                        constants.util["doAnimation"](_0x1ca282["privacyLink"], "mtcap-fadeout 300ms forwards linear");
                        constants["util"]["doAnimation"](_0x1ca282["termsLink"], "mtcap-fadeout 300ms forwards linear");
                    }
                    constants.util.doAnimation(_0x1ca282["msg"], "mtcap-fadeout 300ms forwards linear");
                    if (_0x33a29e["challengeType"] != "imageonly") {
                        if (_0x33a29e["widgetSize"] != constants.constant.mini) {
                            constants.util.doAnimation(_0x1ca282.ampersand, "mtcap-fadeout 300ms forwards linear");
                        } else {
                            constants.util["doAnimation"](_0x1ca282.audioControl, "mtcap-fadeout 300ms forwards linear");
                        }
                    }
                    constants.util["doAnimation"](_0x1ca282["msgContainer"], "mtcap-fadeout 300ms forwards linear");
                }, 3000);
            }
        }
    };
    function _0x247157() {
        var _0x4ececc = constants.UI.e[_0x33a29e.widgetInstance];
        var _0x528ac0 = _0x4ececc.audio["clientWidth"];
        var _0x1f7058 = _0x33a29e["widgetSize"] == constants["constant"]["mini"] ? 16 : _0x744bea;
        var _0x278a90 = _0x33a29e["widgetSize"] == constants.constant["mini"] ? 16 : 19;
        constants.util["widgetHeightChange"](_0x33a29e);
        if (!_0x528ac0) {
            return;
        }
        if (_0x528ac0 != _0x1f7058) {
            var _0x45b47f = _0x4ececc.audio;
            var _0x5ec107 = _0x4ececc["stsImg"];
            var _0xca1aa5 = _0x528ac0 / _0x278a90;
            var _0x27adde = 0;
            while ((_0xca1aa5 < 0.95 || _0xca1aa5 > 1.4) && _0x27adde < 3) {
                _0x27adde++;
                if (_0xca1aa5 < 1) {
                    _0x137b6b += 1;
                    _0x219534 += 1;
                } else if (_0xca1aa5 > 1.4) {
                    _0x137b6b -= 1;
                    _0x219534 -= 1;
                }
                _0x45b47f.style.fontSize = _0x137b6b + "pt";
                _0x5ec107.style["fontSize"] = _0x219534 + "pt";
                constants["util"]["widgetHeightChange"](_0x33a29e);
                _0x528ac0 = _0x4ececc["audio"]["clientWidth"];
                _0xca1aa5 = _0x528ac0 / 19;
            }
        }
    }
    constants.browser["calcW1nfo"](false);
    constants["postMessage"](_0x1add24, "loaded", {
        msg: "Iframe Loaded"
    });
    var _0x348bc3;
    var _0x479149;
    if (_0x1add24["widgetSize"] == constants["constant"]["mini"]) {
        _0x348bc3 = constants["config"].validateConf(constants.config["miniDefaults"], _0x1add24);
        _0x479149 = constants.util["overlayConf"](constants.config["miniDefaults"], _0x348bc3);
    } else {
        _0x348bc3 = constants["config"]["validateConf"](constants["config"].defaults, _0x1add24);
        _0x479149 = constants["util"].overlayConf(constants["config"]["defaults"], _0x348bc3);
    }
    if (constants.config["isValidSitekey"](_0x479149)) {
        constants["util"]["setObject"](_0x479149);
        var _0x33a29e = constants.util["getObject"](_0x479149["widgetInstance"]);
        _0x33a29e["counter"] = parseInt(_0x33a29e["iframeId"].substr(_0x33a29e["iframeId"]["lastIndexOf"]("-") + 1, 1));
        document["getElementsByClassName"]("mtcap-main")[0]["setAttribute"]("id", "mtcap-main-" + _0x33a29e["counter"]);
        constants["util"].detectAutoplaySupport();
        if (_0x33a29e["textLength"]) {
            _0x33a29e.lf = 0;
        } else if (_0x33a29e.lowFrictionInvisible === "force-visible") {
            _0x33a29e.lf = 0;
        } else if (_0x33a29e["testmode_lowFrictionInvisible"] === "force-visible") {
            _0x33a29e.lf = "t0";
        } else if (_0x33a29e.testmode_lowFrictionInvisible === "force-invisible") {
            _0x33a29e.lf = "t1";
        } else {
            _0x33a29e.lf = 1;
        }
        _0x33a29e.isMouseFlowEnabled = false;
        if (_0x33a29e["custom"]) {
            constants["render"]["doCustomRender"](_0x33a29e);
        } else {
            constants["render"].doRender(_0x33a29e);
        }
        constants["util"]["addEvent"](document.getElementsByTagName('body')[0], ["focusin"], function () {
            _0x2722a3 = true;
            constants.widget["showOrHideOuterText"]();
        });
        constants["util"]["addEvent"](document.getElementsByTagName("body")[0], ["focusout"], function () {
            _0x2722a3 = false;
            constants["widget"].showOrHideOuterText();
        });
        constants["util"]["addEvent"](document.getElementsByTagName('body')[0], ["mouseenter"], function () {
            _0x10a05d = true;
            constants["widget"]["showOrHideOuterText"]();
        });
        constants.util["addEvent"](document.getElementsByTagName('body')[0], ["mouseleave"], function () {
            _0x10a05d = false;
            constants["widget"]["showOrHideOuterText"]();
        });
    }
})();