<!DOCTYPE html>
<html>

<head></head>

<body>
    <p>Dear {{ $name }},</p>
    <p>Please click <a
            href="{{ env('WEB_URL') }}/signup/confirmEmail/{{ $signUpToken }}?email={{ $email }}">click here</a>
        to confirm you email.</p>


    <p>Best regards.</p>
</body>

</html>
