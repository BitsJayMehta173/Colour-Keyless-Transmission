import qrcode

def generate_qr_code(text, filename):
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(text)
    qr.make(fit=True)

    img = qr.make_image(fill='black', back_color='white')
    img.save(filename)

# Example usage
text = "Hello, this is a QR code for plain text!"
filename = "qrcode.png"
generate_qr_code(text, filename)
print(f"QR code saved as {filename}")
