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

text = "A:1234\nB:3423\nC:3123"
filename = "qrcode.png"
generate_qr_code(text, filename)
print(f"QR code saved as {filename}")
