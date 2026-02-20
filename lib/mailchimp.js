import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_DC,
});

/**
 * Add or update a subscriber in Mailchimp
 * @param {string} email
 * @param {string} name - full name
 * @param {string[]} tags - e.g. ['Newsletter'] or ['Consultation Booking']
 * @param {object} mergeFields - extra fields like BOOKDATE, BOOKTIME
 */
export async function subscribeToMailchimp(email, name, tags = [], mergeFields = {}) {
  const [FNAME, ...lastParts] = name.trim().split(" ");
  const LNAME = lastParts.join(" ");

  try {
    // Use PUT (upsert) so re-subscribers don't throw errors
    await mailchimp.lists.setListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      // MD5 hash of lowercased email (Mailchimp requirement)
      require("crypto").createHash("md5").update(email.toLowerCase()).digest("hex"),
      {
        email_address: email,
        status_if_new: "subscribed",
        merge_fields: {
          FNAME,
          LNAME,
          ...mergeFields,
        },
      }
    );

    // Add tags separately
    if (tags.length > 0) {
      await mailchimp.lists.updateListMemberTags(
        process.env.MAILCHIMP_AUDIENCE_ID,
        require("crypto").createHash("md5").update(email.toLowerCase()).digest("hex"),
        {
          tags: tags.map((tag) => ({ name: tag, status: "active" })),
        }
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Mailchimp error:", error);
    return { success: false, error: error.message };
  }
}